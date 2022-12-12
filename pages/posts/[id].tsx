import Layout from '../../components/Layout';
import { getAllPostIds } from '../../lib/post';

// SSGで動的ルーティングを設定する
export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,

    // falseにすると上のパス以外にアクセすると404になるようになる
    fallback: false,
  }
}

export default function Post() {
  return (
    <Layout>動的ルーティング設定</Layout>
  );
}