import { createStyles, Overlay, Container, Title, Button, Text, rem, em, Box } from '@mantine/core';
import { useState } from 'react';
import CardDonasi from '../../customComp/cardDonasi';
import Link from 'next/link';
import { Carousel } from '@mantine/carousel';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    marginLeft: 50,
    marginTop: rem(-120),
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
      marginLeft: 1,
    },
  },

  title: {
    paddingRight: 100,
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    // [theme.fn.smallerThan('sm')]: {
    //   fontSize: rem(40),
    //   lineHeight: 1.2,
    // },

    // [theme.fn.smallerThan('xs')]: {
      //   fontSize: rem(28),
      //   lineHeight: 1.3,
      // },
      [`@media (min-width: ${em(777)})`]: {
        padding:0
      },
      [`@media (max-width: ${em(600)})`]: {
        fontSize: rem(30),
        lineHeight: 1.3,
        padding:0
      },
      [`@media (max-width: ${em(415)})`]: {
        fontSize: rem(26),
        lineHeight: 1.3,
      },
      [`@media (max-width: ${em(391)})`]: {
        fontSize: rem(25),
        lineHeight: 1.3,
      },
    [`@media (max-width: ${em(376)})`]: {
      fontSize: rem(25),
      lineHeight: 1.3,
      padding:0
    },
    [`@media (max-width: ${em(340)})`]: {
      fontSize: rem(20),
      lineHeight: 1.3,
      padding:0
    },
    [`@media (max-width: ${em(281)})`]: {
      fontSize: rem(20),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
    [`@media (max-width: ${em(281)})`]: {
      width:'100%',
    },
    
  },

  card2: {
    [`@media (min-width: ${em(1290)})`]: {
      display: 'none',
    },
    [`@media (max-width: ${em(1290)})`]: {
      marginTop: 10,
      paddingLeft: 50,
      paddingRight: 50,
    },
  },

  card: {
    width: 300,
    zIndex: 5,
    marginTop: -550,
    marginBottom: 200,
    marginLeft: 1100,
    [`@media (max-width: ${em(1420)})`]: {
      marginLeft: 1050,
    },
    [`@media (max-width: ${em(1385)})`]: {
      marginLeft: 1000,
    },
    [`@media (max-width: ${em(1330)})`]: {
      marginLeft: 980,
    },
    [`@media (max-width: ${em(1290)})`]: {
      display: 'none',
    },
  },
}));

function carouselCard({ image }: any) {
  return (
    <>
      <Carousel
        maw={320}
        mx="auto"
        withIndicators
        height={200}
        dragFree
        slideGap="md"
        align="start"
      >
        <Carousel.Slide>{image}</Carousel.Slide>
      </Carousel>
    </>
  );
}

export function HeroComp(props: {
  withButton: any;
  data: {
    data: {
      attributes: { title: any; headline: any; txtButton: any; imageHero: any; showcase: any };
    }[];
  };
  seeCardDonasi: any;
}) {
  const { classes } = useStyles();
  const { title, headline, txtButton, imageHero, showcase } = props.data.data[0].attributes;
  const { url } = imageHero.data.attributes;
  const { data: urlShowcase } = showcase;

  return (
    <>
      <Box
        component="div"
        className={classes.hero}
        sx={{ backgroundImage: `url(https://strapi.yathim.or.id/${url})` }}
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 60%, rgba(0, 0, 0, .65) 95%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container}>
          <Title className={classes.title}>{title}</Title>
          <Text className={classes.description} size="lg" mt="lg">
            {headline}
          </Text>
          {props.withButton && (
            <Link href="/berbagi">
              <Button
                variant="gradient"
                gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                size="xl"
                radius="xl"
                className={classes.control}
                style={{ marginRight: -20 }}
              >
                {txtButton}
              </Button>
            </Link>
          )}
        </Container>
      </Box>
      {props.seeCardDonasi && (
        <>
          <div className={classes.card}>
            <CardDonasi />
          </div>
          <div className={classes.card2}>
            <CardDonasi />
          </div>
        </>
      )}
    </>
  );
}
