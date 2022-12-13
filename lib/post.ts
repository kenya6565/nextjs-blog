import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// process.cwd = get current directory path
const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルを配列として取得
export function getPostsData() {
  // 外部APIやデータベースからデータを取得する場合は非同期処理でデータを取得して
  // getServerSideProps()の中で呼び出してあげる
  // const fetchData = await fetch("endpoint");

  const fileNames: Array<string> = fs.readdirSync(postsDirectory, "utf8");

  const allPostsData: object[] = fileNames.map((fileName: string) => {
    // md を除いたファイル名
    const id: string = fileName.replace(/\.md$/, "");

    const fullPath: string = path.join(postsDirectory, fileName);

    //  マークダウンファイルを文字列として読み取る
    const fileContents: string = fs.readFileSync(fullPath, "utf8");

    // メタデータの解析(titleとか)
    const matterResult: object = matter(fileContents).data;

    // idとデータを返す
    return {
      id,
      ...matterResult,
    };
    // [
    //   {
    //     id: "hoge",
    //     title: "hoge",
    //     date: "hoge",
    //     thumbnail: "hoge",
    //   },
    //  {
    //     id: "hoge",
    //     title: "hoge",
    //     date: "hoge",
    //     thumbnail: "hoge",
    //   },

    // ];
  });
  return allPostsData;
}

// getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
  const fileNames: Array<string> = fs.readdirSync(postsDirectory, "utf8");
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
  // この形で取得する
  // 参考: https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
  // [
  //   {
  //     params: {
  //       id: "ssg-ssr"
  //     }
  //   },
  //   {
  //     params: {
  //       id: "next-react"
  //     }
  //   }
  // ]
}

// idに基づいて異なったブログ投稿データを返す
export function getPostData(id) {
  const fullPath: string = path.join(postsDirectory, `${id}.md`);

  //  マークダウンファイルを文字列として読み取る
  const fileContents: string = fs.readFileSync(fullPath, "utf8");

  // メタデータの解析(titleとか)
  const matterResult: any = matter(fileContents);

  // matterResult.contentのままではマークダウン記法ではなくただの文字列になってしまう
  // remarkを使ってhtmlにparseする
  const blogContent = await remark().use(html).process(matterResult.content);

  const blogContentHtml: string = blogContent.toString();

  return {
    id,
    blogContentHtml,
    ...matterResult.data,
  };
}
