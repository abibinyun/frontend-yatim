import React from 'react';
import { ArticlesCardsGrid } from '../../components/Grid';
import { Flex } from '@mantine/core';

export default function GaleryPage({ data }: any) {
  const rawDtKurban = data[0].attributes.img_kurban.data;
  const datas = rawDtKurban.map((item: { attributes: any }) => item.attributes);
  const datar = datas.map((item: { url: any }) => item.url);
  const rawDtSantunan = data[0].attributes.img_santunan.data;
  const datas1 = rawDtSantunan.map((item: { attributes: any }) => item.attributes);
  const datar1 = datas1.map((item: { url: any }) => item.url);

  return (
    <>
      <div>
        <div>
          <Flex mih={30} gap="lg" justify="center" align="center" direction="row" wrap="wrap">
            {datar.map((item: any, idx: React.Key | null | undefined) => (
              <ArticlesCardsGrid key={idx} data={item} />
            ))}
            {datar1.map((item: any, idx: React.Key | null | undefined) => (
              <ArticlesCardsGrid key={idx} data={item} />
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://strapi.yathim.or.id/api/galeries?populate=*');
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data,
    },
  };
}
