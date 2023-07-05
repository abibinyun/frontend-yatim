import React from 'react';
import { AspectRatio, Card, Container, SimpleGrid, Text, createStyles } from '@mantine/core';
import Image from 'next/legacy/image';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export default function BlogCard({ data }: any) {
  const { classes } = useStyles();
  const myLoader = ({ src, width, height }: any) => {
    return `https://strapi.yathim.or.id${src}?w=${width}&h=${height}`;
  };
  const cards = data.map((article: any, idx: any) => (
    <Card key={idx} p="xs" radius="md" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Link href={`blog/${article.attributes.slugTitle}`}>
          <Image
            loader={myLoader}
            src={article.attributes.thumbnail.data.attributes.url}
            width={550}
            height={500}
          />
        </Link>
      </AspectRatio>

      

      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.attributes.title}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.attributes.title}
      </Text>
    </Card>
  ));

  return (
    <div>
      <div>
        <Container py="xl">
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {cards}
          </SimpleGrid>
        </Container>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const fetchHero = await fetch(
    `https://strapi.yathim.or.id/api/home-pages?filters[id][$eq]=4&populate=*`
  );
  const dataHero = await fetchHero.json();
  const fetchBerita = await fetch(`https://strapi.yathim.or.id/api/beritas?populate=*`);
  const dataBerita = await fetchBerita.json();
  if (!dataHero || !dataBerita) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataHero,
      dataBerita,
    },
  };
}
