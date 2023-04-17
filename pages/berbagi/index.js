import React, { useRef } from 'react';
import CarArComp from '../../components/CarArticle';
import { Paper, Space, Text, rem } from '@mantine/core';
import CardDonasi from '../../customComp/cardDonasi';
import Autoplay from 'embla-carousel-autoplay';

export default function berbagi({ dataImgGalery }) {
  const rawDtKurban = dataImgGalery.data[0].attributes.img_kurban.data;
  const datas = rawDtKurban.map((item) => item.attributes);
  const datar = datas.map((item) => item.url);
  const autoplay = useRef(Autoplay({ delay: 1000 }));
  const plugins = [autoplay.current];
  const onMouseEnter = autoplay.current.stop;
  const onMouseLeave = autoplay.current.reset;
  return (
    <div>
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <CarArComp
          height={440}
          controlOffSet={'xs'}
          orientation={'horizontal'}
          slideGap={'xl'}
          slideSize={'50%'}
          plugin={plugins}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          data={datar}
          mWidth={rem(1300)}
          mHeight={rem(500)}
          loop={true}
        />
      </div>
      <Space h={30} />
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Paper shadow="md" radius="xl" p="xl">
          <Text>Paper is the most basic ui component</Text>
          <Text>
            Use it to create cards, dropdowns, modals and other components that require background
            with shadow Use it to create cards, dropdowns, modals and other components that require
            background with shadowUse it to create cards, dropdowns, modals and other components
            that require background with shadowUse it to create cards, dropdowns, modals and other
            components that require background with shadowUse it to create cards, dropdowns, modals
            and other components that require background with shadowUse it to create cards,
            dropdowns, modals and other components that require background with shadowUse it to
            create cards, dropdowns, modals and other components that require background with shadow
          </Text>
        </Paper>
      </div>
      {/* </Center> */}
      <Space h={50} />
      <div id="card-donasi" style={{ marginLeft: 20, marginRight: 20, paddingTop: 10 }}>
        <CardDonasi />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const resImgGalery = await fetch(`https://strapi.yathim.or.id/api/galeries?populate=*`);
  const dataImgGalery = await resImgGalery.json();
  if (!dataImgGalery) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataImgGalery,
    },
  };
}

{
  /* <Carousel maw={1280} mx="auto" withIndicators height={200}>
<Carousel.Slide>1</Carousel.Slide>
<Carousel.Slide>2</Carousel.Slide>
<Carousel.Slide>3</Carousel.Slide>
</Carousel> */
}
