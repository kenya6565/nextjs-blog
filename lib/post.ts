import path from "path";
import fs from "fs";
import matter from "gray-matter";

// process.cwd = get current directory path
const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルを配列として取得
export function getPostsData() {
  const fileNames: Array<string> = fs.readdirSync(postsDirectory, "utf8");

  const allPostsData: object = fileNames.map((fileName: string) => {
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
  });
  return allPostsData;
}
