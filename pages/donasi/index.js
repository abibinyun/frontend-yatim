import React from 'react';
import CustomCard from '../../customComp/customCard';
import { HeroComp } from '../../components/Hero';
import { Badge, Center, createStyles, em, rem } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  // card: {
  //   [`@media (max-width: ${em(500)})`]: {
  //     width: '50%',
  //   },
  // },
}));

export default function Donasi({ data, dataHero }) {
  const { classes } = useStyle();
  return (
    <>
      <div style={{ marginTop: -200 }}>
        <HeroComp data={dataHero} seeCardDonasi={false} withButton={false} dataMargin={rem(150)} />
      </div>
      <Center sx={{ marginTop: 50 }}>
        <Badge color="teal" size="xl">
          <h2>Program Donasi</h2>
        </Badge>
      </Center>
      <div className={classes.card}>
        <CustomCard data={data} height={250} width={400} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://strapi.yathim.or.id/api/donasis?pagination[page]=1&pagination[pageSize]=10&populate=*`
  );
  const data = await res.json();
  const fetchHero = await fetch(
    `http://strapi.yathim.or.id/api/home-pages?filters[id][$eq]=2&populate=*`
  );
  const dataHero = await fetchHero.json();
  if (!data || !dataHero) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data,
      dataHero,
    },
  };
}
