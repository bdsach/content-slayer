import Layout from "../components/Layout";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, type Post } from "contentlayer/generated";
import { OneColumn, ThreeColumns, TwoColumns } from "components/GridCard";
import { Space } from "@mantine/core";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.createdAt), new Date(b.createdAt));
  });
  return { props: { posts } };
}

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <Layout>
      <OneColumn content={posts} />
      <Space my="xl" />
      <TwoColumns content={posts} />
      <Space my="xl" />
      <ThreeColumns content={posts} />
    </Layout>
  );
};

export default Home;
