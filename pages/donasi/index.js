import React from 'react';
import CustomCard from '../../customComp/customCard';
import { HeroComp } from '../../components/Hero';
import { Badge, Button, Center, Space, rem } from '@mantine/core';
import { useRouter } from 'next/router';

export default function Donasi({ data, dataHero, page }) {
  const router = useRouter();
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
      <div>
        <CustomCard data={data.data} height={350} width={400} />
      </div>
      <Center>
        <Button
          onClick={() => router.push(`/donasi?page=${page - 1}`)}
          disabled={page === 1}
          color="green"
        >
          prev
        </Button>
        <Space w={100} mt={100} />
        <Button
          onClick={() => router.push(`/donasi?page=${page + 1}`)}
          disabled={page === data.meta.pagination.pageCount}
          color="green"
        >
          next
        </Button>
      </Center>
    </>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await fetch(
    `${process.env.API_URL}/donasis?pagination[page]=${page}&pagination[pageSize]=6&pagination&populate=*`
  );
  const data = await res.json();
  const count = await fetch(`${process.env.API_URL}/donasis?populate=*`);
  const dataCount = await count.json();
  const fetchHero = await fetch(
    `https://strapi.yathim.or.id/api/home-pages?filters[id][$eq]=2&populate=*`
  );
  const dataHero = await fetchHero.json();
  if (!data || !dataHero) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
      dataHero,
      page: +page,
      dataCount,
    },
  };
}
