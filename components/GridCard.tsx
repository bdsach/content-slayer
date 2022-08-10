import React from "react";
import { type Post } from "contentlayer/generated";
import { Grid, Container } from "@mantine/core";
import CommonCard, { HeroCard } from "./Card";

export const OneColumn = ({ content }: { content: Post[] }) => {
  return (
    <Container>
      <Grid>
        {content.slice(0, 1).map((item) => {
          return (
            <Grid.Col key={item._raw.flattenedPath}>
              <HeroCard item={item} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export const TwoColumns = ({ content }: { content: Post[] }) => {
  return (
    <Container>
      <Grid gutter="xl">
        {content.slice(1, 3).map((item) => {
          return (
            <Grid.Col span={6} key={item._raw.flattenedPath}>
              <CommonCard item={item} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};

export const ThreeColumns = ({ content }: { content: Post[] }) => {
  return (
    <Container>
      <Grid>
        {content.slice(3, 6).map((item) => {
          return (
            <Grid.Col span={4} key={item._raw.flattenedPath}>
              <CommonCard item={item} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
};
