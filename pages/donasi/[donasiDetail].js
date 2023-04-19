import { AspectRatio, Container, Paper, Text, TypographyStylesProvider } from '@mantine/core';
import Image from 'next/legacy/image';
import React from 'react';
import CardDonasi from '../../customComp/cardDonasi';
import { useRouter } from 'next/router';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Head from 'next/head';

export default function DonasiDetail({ data }) {
  const { data: datas } = data;
  const { attributes } = datas[0];
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{` ${attributes.title} | Yathim.or.id | Yayasan Taman Harapan Insan Mulia`}</title>
        <meta property="og:url" content={`https://strapi.yathim.or.id/${attributes.slugTitle}`} />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={` ${attributes.title} | Yathim.or.id | Yayasan Taman Harapan Insan Mulia`}
        />
        <meta property="og:description" content={attributes.description.substring(0, 100)} />
        <meta
          property="og:image"
          content={`https://strapi.yathim.or.id${attributes.thumbnail.data.attributes.url}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="yathim.or.id" />
        <meta
          property="twitter:url"
          content={`https://strapi.yathim.or.id/donasi/${attributes.slugTitle}`}
        />
        <meta
          name="twitter:title"
          content={` ${attributes.title} | Yathim.or.id | Yayasan Taman Harapan Insan Mulia`}
        />
        <meta name="twitter:description" content={attributes.description.substring(0, 100)} />
        <meta
          name="twitter:image"
          content={`https://strapi.yathim.or.id${attributes.thumbnail.data.attributes.url}`}
        />
      </Head>

      <link
        itemProp="thumbnailUrl"
        href={`https://strapi.yathim.or.id${attributes.thumbnail.data.attributes.url}`}
      />
      <span itemProp="thumbnail" itemScope itemType="http://schema.org/ImageObject" />
      <link
        itemProp="url"
        href={`https://strapi.yathim.or.id${attributes.thumbnail.data.attributes.url}`}
      />
      <article>
        <Container>
          <div style={{ justifyContent: 'flex-start', marginBottom: 50 }}>
            <h1>{attributes.headline}</h1>
          </div>
          <AspectRatio ratio={1080 / 720} maw={900} mx="auto" mb={80}>
            <Image
              alt="donasi-anak-yatim"
              src={`https://strapi.yathim.or.id${attributes.thumbnail.data.attributes.url}`}
              layout="fill"
              objectFit="contain"
              unoptimized={true}
              style={{ borderRadius: '10px' }}
            />
          </AspectRatio>
          <h3>{attributes.title}</h3>
          <Paper shadow="md" radius="lg" p="xl">
            <ReactMarkdown>{attributes.description}</ReactMarkdown>
          </Paper>
          <div style={{ marginTop: 50 }}>
            <h3>Berbagi Kebaikan</h3>
            <CardDonasi />
          </div>
        </Container>
      </article>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { donasiDetail } = params;
  const res = await fetch(
    `https://strapi.yathim.or.id/api/donasis?filters[slugTitle][$eq]=${donasiDetail}&populate=*`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
