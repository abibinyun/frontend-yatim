import { AspectRatio, Center, Container, Paper, Text, Title } from '@mantine/core';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import React from 'react';

export default function BlogId({ data }: any) {
  const { title, headline, description, thumbnail } = data.data[0].attributes;
  const { url } = thumbnail.data.attributes;
  const router = useRouter();
  const { blogDetail } = router.query;

  const myLoader = ({ src , width, height}: any) => {
    return `https://strapi.yathim.or.id${src}?w=${width}&h=${height}`;
  };

  return (
    <div style={{ marginTop: 50 }}>
      <Center style={{ marginBottom: 50 }}>
        <Title>{title}</Title>
      </Center>
      <Center>
        <div style={{width: '700px', height:'auto'}} >
          <Image loader={myLoader} src={url}
          width={200}
          height={160}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          style={{ height: '100%', width: '100%' }} 
          />
        </div>
          {/* </div> */}
      </Center>
      <Center>
        <Text>
        <h2>{headline}</h2>
        </Text>
      </Center>
      <Container>
        <Center>
          <Paper shadow="md" radius="lg" p="xl">
            <Text>
              <ReactMarkdown>{description}</ReactMarkdown>
            </Text>
          </Paper>
        </Center>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context: { params: any }) {
  const { params } = context;
  const { blogDetail } = params;
  const res = await fetch(
    `https://strapi.yathim.or.id/api/beritas?filters[slugTitle][$eq]=${blogDetail}&populate=*`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
