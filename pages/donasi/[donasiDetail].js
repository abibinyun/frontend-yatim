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
      {/* <Head>
        <title>
          {attributes.title} | {attributes.headline} | Yathim.or.id | Yayasan Taman Harapan Insan
          Mulia`
        </title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="type" property="og:type" content="article" />
        <meta name="title" property="og:title" content={attributes.title} />
        <meta
          name="url"
          property="og:url"
          content={`https://api.yathim.or.id/donasi/${attributes.slugTitle}`}
        />
        <meta
          name="image"
          property="og:image"
          content={`http://strapi.yathim.or.id${attributes.thumbnail.data.attributes.url}`}
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content={attributes.headline} />
        <meta
          name="description"
          property="og:description"
          content={attributes.description.substring(0, 100)}
        />
        <meta name="author" property="article:author" content={attributes.title} />
        <meta
          name="published_time"
          property="article:published_time"
          content="2023-04-12T09:02:00.000+07:00"
        />
        <meta
          name="modified_time"
          property="article:modified_time"
          content="2023-04-13T09:06:00.000+07:00"
        />
        <meta name="section" property="article:section" content={attributes.headline} />
        <meta name="tag" property="article:tag" content={attributes.title} />
        <meta name="tag" property="article:tag" content="anak yatim" />
        <meta name="tag" property="article:tag" content="santunan anak yatim" />
        <meta name="tag" property="article:tag" content="doa anak yatim" />
        <meta name="tag" property="article:tag" content="manfaat santunan anak yatim" />
      </Head> */}
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
            {/* <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: `${attributes.description}` }} />
          </TypographyStylesProvider> */}
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
