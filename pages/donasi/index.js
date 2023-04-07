import React from 'react';
import CustomCard from '../../customComp/customCard';
import { Image } from '@mantine/core';

export default function Donasi({ data }) {
  return (
    // backgroundImage:
    //   'url(http://localhost:1337/uploads/sido_muncul_20180525_102729_001718b8f6.webp)',

    <div>
      {/* <AspectRatio
        ratio={1080 / 720}
        // maw={2000}
        style={{
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // marginBottom: -200,
          // marginTop: -350,
        }}
      > */}
      <Image
        src="https://eadn-wc04-3358223.nxedge.io/cdn/wp-content/themes/framework/img/alexis-serrano-hero-section-example.jpg"
        alt="Random image"
        style={{
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: 100,
          marginTop: -125,
        }}
      />
      {/* </AspectRatio> */}
      <CustomCard data={data} />
      <p>donasi page</p>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:1337/api/donasis?populate=*');
  const data = await res.json();
  // const resHero = await fetch('http://localhost:1337/api/home-pages?populate=*');
  // const dataHero = await resHero.json();
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
