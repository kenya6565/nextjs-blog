import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css";

// return paths used as dynamic routing
export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,

    // falseにすると上のパス以外にアクセすると404になるようになる
    fallback: false,
  };
}

// SSGでブログの中身を表示する
// URL(params.id)でどのブログの中身を表示するか判断する
// params = return val of method getStaticPaths
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export default function Post({ postData }) {
  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>

        {/*  you need to sanitize content to use dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHtml }} />
      </article>
    </Layout>
  );
}
