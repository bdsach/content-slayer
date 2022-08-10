import { GetStaticProps } from "next";
import { allPosts, type Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import {
  Container,
  Title,
  Group,
  Image,
  Anchor,
  Button,
  Center,
  Text,
  Space,
  Badge,
} from "@mantine/core";
import NextLink from "next/link";
import Layout from "components/Layout";

export default function Post({ post }: { post: Post }) {
  const MDX = useMDXComponent(post.body.code);

  return (
    <Layout>
      <Center my={20}>
        <Anchor component={NextLink} href="/">
          <Button
            sx={{ textTransform: "uppercase", fontWeight: 700 }}
            variant="outline"
            component="a"
          >
            Back
          </Button>
        </Anchor>
      </Center>
      <Container size="md">
        <Title align="center" order={1}>
          {post.title}
        </Title>
      </Container>
      <Space mt={30} />
      <Group position="center">
        <Anchor
          component={NextLink}
          href={`category/${post.category?.toLocaleLowerCase()}`}
        >
          <Badge
            sx={() => ({
              cursor: "pointer",
            })}
          >
            {post.category}
          </Badge>
        </Anchor>
        {post.tags.map((tag, i) => (
          <Text sx={{ fontFamily: "monospace" }} key={i}>
            #{tag}
          </Text>
        ))}
      </Group>
      <Container size="md" my={50}>
        <Image height={500} radius="md" src={post.thumbnail} alt={post.title} />
      </Container>
      <Container size="sm">
        <MDX />
      </Container>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params?.slug
  );
  return { props: { post } };
};
