import { useRouter } from 'next/router';
import React from 'react';

export default function BlogId() {
    const router = useRouter();
    const { blogId } = router.query;
  return (
    <div>Blog Dynamic Route: {blogId}</div>
  );
}
