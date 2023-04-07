import React from 'react';
import { ArticlesCardsGrid } from '../../components/Grid';
import { Container, Center, Flex } from '@mantine/core';

export default function GaleryPage({ data }: any) {
  const rawDtKurban = data[0].attributes.img_kurban.data;
  const datas = rawDtKurban.map((item: { attributes: any }) => item.attributes);
  const datar = datas.map((item: { url: any }) => item.url);
  const rawDtSantunan = data[0].attributes.img_santunan.data;
  const datas1 = rawDtSantunan.map((item: { attributes: any }) => item.attributes);
  const datar1 = datas1.map((item: { url: any }) => item.url);
  // console.log(datar);
  return (
    <>
      {/* <Center> */}
      <div>
        <div>
          <Flex
            mih={30}
            // bg="rgba(0, 0, 0, .3)"
            gap="lg"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
          >
            {/* <div> */}
            {datar.map((item: any) => (
              <ArticlesCardsGrid data={item} />
            ))}
            {/* </div> */}
            {/* <div> */}
            {datar1.map((item: any) => (
              <ArticlesCardsGrid data={item} />
            ))}
            {/* </div> */}
          </Flex>
        </div>
      </div>
      {/* </Center> */}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:1337/api/galeries?populate=*');
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data,
      // dataHero,
    },
  };
}
