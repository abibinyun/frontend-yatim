import { AspectRatio, Container } from '@mantine/core';
import Image from 'next/legacy/image';
import React from 'react';
import CardDonasi from '../../customComp/cardDonasi';
import { useRouter } from 'next/router';

export default function DonasiDetail({ data }) {
  const { data: datas } = data;
  const { attributes } = datas[0];
  const router = useRouter();

  return (
    <article>
      <Container>
        <div style={{ justifyContent: 'flex-start', marginBottom: 50 }}>
          <h1>{attributes.headline}</h1>
        </div>
        <AspectRatio ratio={1080 / 720} maw={900} mx="auto" mb={80}>
          <Image
            alt="Vercel logo"
            src={`http://strapi.yathim.or.id${attributes.thumbnail.data.attributes.url}`}
            layout="fill"
            objectFit="contain"
            unoptimized={true}
            style={{ borderRadius: '10px' }}
          />
        </AspectRatio>
        <h3>{attributes.title}</h3>
        <text>{attributes.description}</text>
        <div style={{ marginTop: 50 }}>
          <h3>Berbagi Kebaikan</h3>
          <CardDonasi />
        </div>
        <p>{router.asPath}</p>
      </Container>
    </article>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { donasiDetail } = params;
  const res = await fetch(
    `http://strapi.yathim.or.id/api/donasis?filters[slugTitle][$eq]=${donasiDetail}&populate=*`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
