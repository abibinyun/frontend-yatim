import { rem } from '@mantine/core';
import { HeroComp } from '../../components/Hero';
import CardGalery from '../../customComp/cardGalery';

export default function GaleryPage({ data, dataHero, dataT }: any) {
  const map = data.map((item: any, idx: any) => item)
  const map1 = map.map((item: { attributes: { img: { data: any; }; }; }, idx: any) => item.attributes.img.data)
  const map2 = map1.map((item: any[], idx: any) => (item.map((item: { attributes: { url: any; }; }, idx: any) => item.attributes.url)))

  return (
    <>
      <div style={{ marginTop: -200 }}>
        <HeroComp data={dataHero} seeCardDonasi={false} withButton={false} />
      </div>
      <CardGalery data={map2} title="Santunan" />
    </>
  );
}

export async function getServerSideProps() {
  const resGalery = await fetch(`http://localhost:1337/api/galeries?fields[0]=title&populate[img][fields][0]=url`);
  const data = await resGalery.json();
  const resTitleGalery = await fetch(`http://localhost:1337/api/galeries?fields[0]=title`)
  const dataTitle = await resTitleGalery.json()
  const fetchHero = await fetch(
    `http://strapi.yathim.or.id/api/home-pages?filters[id][$eq]=3&populate=*`
  );
  const dataHero = await fetchHero.json();
  if (!data || !dataHero) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data,
      dataHero,
      dataT: dataTitle ,
    },
  };
}
