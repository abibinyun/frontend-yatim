import React from 'react';
import { ArticlesCardsGrid, GridComp } from '../../components/Grid';
import { Container, Center } from '@mantine/core';

export default function GaleryPage({ data }: any) {
  const rawDtKurban = data[0].attributes.img_kurban.data;
  const datas = rawDtKurban.map((item: { attributes: any }) => item.attributes);
  const datar = datas.map((item: { url: any }) => item.url);
  // console.log(datar);
  return (
    <>
      <Center>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            // justifyContent: 'center',
            // alignItems: 'stretch',
          }}
        >
          <div>
            {datar.map((item: any) => (
              <ArticlesCardsGrid data={item} />
            ))}
          </div>
        </div>
      </Center>
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
