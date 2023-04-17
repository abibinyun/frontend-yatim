import { useRouter } from 'next/router';
import React from 'react';

export default function BlogId() {
  const router = useRouter();
  const { blogId } = router.query;
  return <div>Blog Dynamic Route: {blogId}</div>;
}

export async function getServerSideProps(context: { params: any }) {
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
