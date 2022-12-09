import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.heddingMd}>
        <p>私はエンジニアです。</p>
      </section>
      <section>
        <h2>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              10th of December, 2022
            </small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              10th of December, 2022
            </small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              10th of December, 2022
            </small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              10th of December, 2022
            </small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
