import { createStyles, Overlay, Container, Title, Button, Text, rem, em } from '@mantine/core';
import { useState } from 'react';
import CardDonasi from '../../customComp/cardDonasi';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(http://strapi.yathim.or.id/uploads/sido_muncul_20180525_102729_001718b8f6.webp)',
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
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
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

export function HeroComp(props: {
  data: { data: { attributes: { title: any; headline: any; txtButton: any; imageHero: any } }[] };
}) {
  const { classes } = useStyles();
  const { title, headline, txtButton } = props.data.data[0].attributes;

  return (
    <>
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container}>
          <Title className={classes.title}>{title}</Title>
          <Text className={classes.description} size="xl" mt="xl">
            {headline}
          </Text>
          <Link href='/berbagi#card-donasi'>
          <Button
            variant="gradient"
            gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            size="xl"
            radius="xl"
            className={classes.control}
            >
            {txtButton}
          </Button>
          </Link>
        </Container>
      </div>
      <div className={classes.card2}>
        <CardDonasi />
      </div>
      <div className={classes.card}>
        <CardDonasi />
      </div>
    </>
  );
}
