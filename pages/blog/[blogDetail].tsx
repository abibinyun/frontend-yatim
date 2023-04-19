import { Center, Container, Paper, Text, Title } from '@mantine/core';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import React from 'react';

export default function BlogId({ data }: any) {
  console.log(data);
  const { title, headline, description, thumbnail } = data.data[0].attributes;
  const { url } = thumbnail.data.attributes;
  const router = useRouter();
  const { blogDetail } = router.query;
  const myLoader = ({ src, width }: any) => {
    return `https://strapi.yathim.or.id${src}?w=${width}`;
  };
  return (
    <div style={{ marginTop: 50 }}>
      <Center style={{ marginBottom: 50 }}>
        <Title>{title}</Title>
      </Center>
      <Center>
        <div>
          <Image loader={myLoader} src={url} width={700} height={400} />
        </div>
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
