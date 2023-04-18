import { useRouter } from 'next/router';
import React from 'react';

export default function BlogId({data}:any) {
  const router = useRouter();
  const { blogDetail } = router.query;
  return (
      <div>
        <div style={{ marginTop:200 }}>
          Blog Dynamic Route: {blogDetail}
        </div>
      </div>
  );
}

export async function getServerSideProps(context: { params: any }) {
  const { params } = context;
  const { blogDetail } = params;
  const res = await fetch(
    `http://localhost:1337/api/beritas?filters[slugTitle][$eq]=${blogDetail}&populate=*`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
