import { rem } from '@mantine/core';
import { HeroComp } from '../../components/Hero';
import CardGalery from '../../customComp/cardGalery';

export default function GaleryPage({ data, dataHero }: any) {
  // console.log(data)
  const map = data.map((item, idx) => item)
  const map1 = map.map(item => item.attributes)
  console.log(map1)
  // const rawDtKurban = data[0].attributes.img_kurban.data;
  // const kurban = rawDtKurban.map((item: { attributes: any }) => item.attributes);
  // const rawDtSantunan = data[0].attributes.img_santunan.data;
  // const santunan = rawDtSantunan.map((item: { attributes: any }) => item.attributes);

  return (
    <>
      {/* <div style={{ marginTop: -200 }}>
        <HeroComp data={dataHero} seeCardDonasi={false} withButton={false} dataMargin={rem(200)} />
      </div>
      <CardGalery data={kurban} title="Kurban" />
      <CardGalery data={santunan} title="Santunan" /> */}
      tes
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/api/galeries?populate=*`);
  const data = await res.json();
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
    },
  };
}
