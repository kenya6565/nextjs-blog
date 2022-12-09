import Head from "next/head";
import Image from "next/image";

const name: string = "Ken Code";
export const siteTitle: string = " Next.js blog";
function Layout({ children }: any) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="images/profile.png" alt="Vercel Logo" />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
