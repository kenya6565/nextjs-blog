import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

// SSGで動的ルーティングを設定する
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
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return <Layout>{postData.title}</Layout>;
}
