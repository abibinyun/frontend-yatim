import React from 'react';
import { HeroComp } from '../../components/Hero';

export default function About({ dataHero }: any) {
  return (
    <div>
      <div style={{ marginTop: -200 }}>
        <HeroComp data={dataHero} seeCardDonasi={false} withButton={false} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const fetchHero = await fetch(
    `http://strapi.yathim.or.id/api/home-pages?filters[id][$eq]=5&populate=*`
  );
  const dataHero = await fetchHero.json();
  if (!dataHero) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataHero,
    },
  };
}
