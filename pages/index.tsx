import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

interface PostData {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
}

// SSGの場合
export async function getStaticProps() {
  // id, title, date, thumbnail

  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

// SSRの場合
// context includes thd data users requested
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのプロップス
//     }
//   }
// }

export default function Home(allPostsData: PostData[]) {
  return (
    <Layout>
      <section className={utilStyles.heddingMd}>
        <p>私はエンジニアです。</p>
      </section>
      <section>
        <h2>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData["allPostsData"].map(
            ({ id, thumbnail, title, date }) => {
              return (
                <article key={id}>
                  <Link href={`/posts/${id}`}>
                    <img
                      src={`${thumbnail}`}
                      className={styles.thumbnailImage}
                    />
                  </Link>
                  <Link href={`/posts/${id}`}>
                    <p className={utilStyles.boldText}>{title}</p>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>{date}</small>
                </article>
              );
            }
          )}
        </div>
      </section>
    </Layout>
  );
}
