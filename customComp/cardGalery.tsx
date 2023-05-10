import { Carousel } from '@mantine/carousel';
import { Center, Flex, createStyles, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/legacy/image';
import React, { useRef } from 'react';

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
    [theme.fn.smallerThan('499')]: {
      display: 'none',
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
    borderRadius: 20,
  },
}));

export default function CardGalery({ data, title }: any) {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const myLoader = ({ src, width }: any) => {
    return `https://strapi.yathim.or.id${src}?w=${width}`;
  };
  const render0 = data.map((item: any[]) =>
    item.map((item: any, idx: React.Key | null | undefined) => (
      <Image
        key={idx}
        priority={true}
        loader={myLoader}
        src={`${item}`}
        height={300}
        width={350}
        className={classes.img}
      />
    ))
  );

  const render = data.map((item: any[]) =>
    item.map((item: any, idx: React.Key | null | undefined) => (
      <Carousel.Slide key={idx}>
        <Center className={classes.card}>
          <Image
            priority={true}
            loader={myLoader}
            src={`${item}`}
            height={300}
            width={350}
            className={classes.img}
          />
        </Center>
      </Carousel.Slide>
    ))
  );
  return (
    <>
      <div className={classes.div}>
        <Carousel
          withIndicators
          loop
          height={'100%'}
          controlsOffset={'xs'}
          orientation={'horizontal'}
          slideGap={'xs'}
          slideSize={mobile ? '20%' : '20%'}
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {render}
        </Carousel>
      </div>
      <Flex mih={50} gap="xs" justify="center" align="center" direction="row" wrap="wrap">
        {render0}
      </Flex>
    </>
  );
}
