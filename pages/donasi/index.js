import React, { useState } from 'react';
import CustomCard from '../../customComp/customCard';
import { HeroComp } from '../../components/Hero';
import { Badge, Button, Center, Container, Space, rem, Text, Flex } from '@mantine/core';
import { useRouter } from 'next/router';

export default function Donasi({ data, dataHero, page }) {
  const [activeFilter, setActiveFilter] = useState({
    new: 'publishedAt%3Aasc',
  });
  const [btnActive, setBtnActive] = useState(false);

  const router = useRouter();
  const pageCount = data.meta.pagination.pageCount;
  const idPage = 'Berbagi Kebaikan';
  const filter = {
    shortByNew: 'publishedAt%3Adesc',
  };
  return (
    <>
      <div style={{ marginTop: -200 }}>
        <HeroComp
          data={dataHero}
          seeCardDonasi={false}
          withButton={false}
          dataMargin={rem(150)}
          idPage={idPage}
        />
      </div>
      <Center sx={{ marginTop: 50 }}>
        <Badge color="teal" size="xl">
          <h2>Program Donasi</h2>
        </Badge>
      </Center>
      <Space h={30} />

      {/*start sort page  */}

      <Container>
        <Flex>
          <Text style={{ fontWeight: 'bold', fontSize: '20px' }}>Filter : </Text>
          <Space w={10} />
          {/* terbaru */}

          {btnActive ? (
            <Button
              onClick={() =>
                router
                  .push(`/donasi`)
                  .then(setActiveFilter({ ...activeFilter, new: 'publishedAt%3Aasc' }))
                  .then(setBtnActive(!btnActive))
              }
              color="green"
            >
              Terbaru
            </Button>
          ) : (
            <Button
              onClick={() =>
                router
                  .push(`/donasi?sort=${filter.shortByNew}`)
                  .then(setActiveFilter({ ...activeFilter, new: filter.shortByNew }))
                  .then(setBtnActive(!btnActive))
              }
              color="gray"
            >
              Terbaru
            </Button>
          )}
          <Space w={10} />
          {/* active  */}
        </Flex>
      </Container>
      {/* end short page  */}

      {/* data content  */}
      <div>
        <CustomCard data={data.data} height={350} width={400} />
      </div>
      {/* end data content  */}

      {/* pagination button */}
      <Center>
        <Button
          onClick={() => router.push(`/donasi?page=${page - 1}&sort=${activeFilter.new}`)}
          disabled={page === 1}
          color="green"
        >
          prev
        </Button>
        <Space w={100} mt={100} />
        <Button
          onClick={() => router.push(`/donasi?page=${page + 1}&sort=${activeFilter.new}`)}
          // disabled={page === data.meta.pagination.pageCount}
          disabled={page === pageCount}
          color="green"
        >
          next
        </Button>
      </Center>
      {/* end pagination button  */}
    </>
  );
}

export async function getServerSideProps({ query: { page = 1, sort } }) {
  // export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.API_URL}/donasis?pagination[page]=${page}&pagination[pageSize]=6&populate=*&sort=${sort}`
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
      sort: +sort,
    },
  };
}
