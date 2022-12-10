import path from "path";
import fs from "fs";
import matter from "matter";

// process.cwd = get current directory path
const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルを配列として取得
export function getPostsData() {
  const fileNames: any = fs.readFileSync(postsDirectory, "utf8");
  const allPostsData = fileNames.map((fileName: string) => {
    // md を除いたファイル名
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);

    //  マークダウンファイルを文字列として読み取る
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // メタデータの解析(titleとか)
    const matterResult = matter(fileContents);

    // idとデータを返す
    return {
      id,
      ...matterResult,
    };
  });
}
