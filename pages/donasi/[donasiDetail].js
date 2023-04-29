import {
  ActionIcon,
  AspectRatio,
  Button,
  Center,
  Container,
  CopyButton,
  Flex,
  Input,
  Paper,
  Popover,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { IconCheck, IconCopy, IconShare } from '@tabler/icons-react';
import Image from 'next/legacy/image';
import React from 'react';
import CardDonasi from '../../customComp/cardDonasi';
import { useRouter } from 'next/router';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Head from 'next/head';

function CopyBtn({ value }) {
  return (
    <CopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
            {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

export default function DonasiDetail({ data }) {
  const { data: datas } = data;
  const { attributes } = datas[0];
  const { title, headline, slugTitle, slugHeadline, description, thumbnail } = attributes;
  const { url } = thumbnail.data.attributes.formats.thumbnail;
  const router = useRouter();
  console.log(attributes);
  return (
    <>
      <article>
        <Head>
          <title>{` ${title} | ${headline} | Yathim.or.id | Yayasan Taman Harapan Insan Mulia`}</title>
          <meta property="og:url" content={`https://yathim.or.id/donasi/${slugTitle}`} />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={` ${title} | ${headline} | Yathim.or.id | Yayasan Taman Harapan Insan Mulia`}
          />
          <meta property="og:description" content={`${description.substring(0, 100)}`} />
          <meta property="og:image" content={`https://strapi.yathim.or.id${url}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="yathim.or.id" />
          <meta
            property="twitter:url"
            content={`https://strapi.yathim.or.id/donasi/${slugTitle}`}
          />
          <meta
            name="twitter:title"
            content={` ${title} | ${headline} | Yathim.or.id | Yayasan Taman Harapan Insan Mulia`}
          />
          <meta name="twitter:description" content={`${description.substring(0, 100)}`} />
          <meta name="twitter:image" content={`https://strapi.yathim.or.id${url}`} />
        </Head>

        <link itemProp="thumbnailUrl" href={`https://strapi.yathim.or.id${url}`} />
        <span itemProp="thumbnail" itemScope itemType="http://schema.org/ImageObject" />
        <link itemProp="url" href={`https://strapi.yathim.or.id${url}`} />
        <Container>
          <Center style={{ marginBottom: 80, marginTop: 80 }}>
            <Title>{attributes.headline}</Title>
          </Center>
          <AspectRatio ratio={1080 / 720} maw={900} mx="auto" mb={80}>
            <Image
              alt="donasi-anak-yatim"
              src={`https://strapi.yathim.or.id${attributes.thumbnail.data.attributes.url}`}
              layout="fill"
              objectFit="contain"
              unoptimized={true}
            />
          </AspectRatio>
          <Text>
            <h1>{attributes.title}</h1>
          </Text>
          <Paper shadow="md" radius="lg" p="xl">
            <Text>
              <ReactMarkdown>{attributes.description}</ReactMarkdown>
            </Text>
          </Paper>
          <div style={{ marginTop: 50 }}>
            <Text>
              <h3>Berbagi Kebaikan</h3>
            </Text>
            <CardDonasi />
          </div>
          <Flex justify={'flex-end'}>
            <Paper shadow="xl" radius="lg" p="xl" w={150} mt={10}>
              <Center>
                <Popover width={200} position="top" withArrow shadow="md">
                  <Popover.Target>
                    <Button
                      radius={12}
                      size="sm"
                      variant="gradient"
                      gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                    >
                      <IconShare style={{ marginRight: '10' }} /> Bagikan
                    </Button>
                  </Popover.Target>
                  <Popover.Dropdown style={{ display: 'flex' }}>
                    <Input value={`https://yathim.or.id${router.asPath}`} />
                    <CopyBtn value={`https://yathim.or.id${router.asPath}`} />
                  </Popover.Dropdown>
                </Popover>
              </Center>
            </Paper>
          </Flex>
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
