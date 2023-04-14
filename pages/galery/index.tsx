import React, { useRef } from 'react';
import { Center, createStyles, rem, useMantineTheme } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/legacy/image';

const useStyles = createStyles((theme) => ({
  div: {
    marginLeft: 100,
    marginRight: 100,
    [theme.fn.smallerThan('1247')]: {
      marginLeft: 50,
      marginRight: 50,
    },
    [theme.fn.smallerThan('1247')]: {
      marginLeft: 40,
      marginRight: 40,
    },
  },
  card: {
    height: rem(350),
    width: rem(400),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  img: {
    borderRadius:20
  }
}));

export default function GaleryPage({ data }: any) {
  const rawDtKurban = data[0].attributes.img_kurban.data;
  const kurban = rawDtKurban.map((item: { attributes: any }) => item.attributes);
  const rawDtSantunan = data[0].attributes.img_santunan.data;
  const santunan = rawDtSantunan.map((item: { attributes: any }) => item.attributes);
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const myLoader = ({ src, width }:any) => {
    return `http://strapi.yathim.or.id/${src}?w=${width}`;
  };
  return (
    <>
      <Center>
        <h2>Kurban</h2>
      </Center>
      <div className={classes.div}>
        <Carousel
          withIndicators
          loop
          height={'100%'}
          controlsOffset={'xs'}
          orientation={'horizontal'}
          slideGap={'xs'}
          slideSize={mobile ? '50%' :'30%'}
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {kurban.map((item: any, idx: React.Key | null | undefined) => (
            <Carousel.Slide key={idx}>
              <Center className={classes.card}>
                <Image
                  priority={true}
                  loader={myLoader}
                  src={`${item.url}`}
                  height={300}
                  width={350}
                  className={classes.img}
                />
              </Center>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <Center>
        <h2>Santunan</h2>
      </Center>
      <div className={classes.div}>
        <Carousel
          withIndicators
          loop
          height={'100%'}
          controlsOffset={'xs'}
          orientation={'horizontal'}
          slideGap={'xs'}
          slideSize={mobile ? '50%' :'30%'}
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {santunan.map((item: any, idx: React.Key | null | undefined) => (
            <Carousel.Slide key={idx}>
              <Center component='div' className={classes.card}>
                <Image
                  priority={true}
                  loader={myLoader}
                  src={`${item.url}`}
                  height={300}
                  width={350}
                  className={classes.img}
                />
              </Center>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://strapi.yathim.or.id/api/galeries?populate=*');
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data,
    },
  };
}
