import React from 'react';
import { HeroComp } from '../../components/Hero';
import BlogCard from '../../customComp/cardBlog'

export default function Blog({ dataHero, dataBerita }: any) {
  const { data } = dataBerita;
  const mapData = data.map((item: any) => item);
  return (
    <div>
      <div style={{ marginTop: -200 }}>
        <HeroComp data={dataHero} seeCardDonasi={false} withButton={false} />
      </div>

      <div>
        <BlogCard data={mapData} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const fetchHero = await fetch(
    `https://strapi.yathim.or.id/api/home-pages?filters[id][$eq]=4&populate=*`
  );
  const dataHero = await fetchHero.json();
  const fetchBerita = await fetch(`https://strapi.yathim.or.id/api/beritas?populate=*`);
  const dataBerita = await fetchBerita.json();
  if (!dataHero || !dataBerita) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataHero,
      dataBerita,
    },
  };
}
