import React from 'react';
import { HeroComp } from '../../components/Hero';
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

export default function Blog({ dataHero, dataBerita }: any) {
  const { data } = dataBerita;
  const mapData = data.map((item: any) => item);
  const { classes } = useStyles();
  const myLoader = ({ src, width }: any) => {
    return `https://localhost:1337${src}?w=${width}`;
  };
  console.log('data berita : ', mapData);
  const cards = mapData.map((article: any, idx: any) => (
    <Card key={idx} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Link href={'blog/'}>
          <Image
            loader={myLoader}
            src={article.attributes.thumbnail.data.attributes.url}
            width={100}
            height={100}
          />
        </Link>
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.attributes.title}
      </Text>
    </Card>
  ));

  return (
    <div>
      <div style={{ marginTop: -200 }}>
        <HeroComp data={dataHero} seeCardDonasi={false} withButton={false} />
      </div>

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
    `http://localhost:1337/api/home-pages?filters[id][$eq]=4&populate=*`
  );
  const dataHero = await fetchHero.json();
  const fetchBerita = await fetch(`http://localhost:1337/api/beritas?populate=*`);
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
