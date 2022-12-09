import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name: string = "Ken Code";
export const siteTitle: string = " Next.js blog";
function Layout({ children }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          src="images/profile.png"
          alt="Vercel Logo"
          className={utilStyles.borderCircle}
        />
        <h1 className={utilStyles.hedding2xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
