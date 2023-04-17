import React from 'react';
import CustomCard from '../../customComp/customCard';
import { HeroComp } from '../../components/Hero';
import { Badge, Center } from '@mantine/core';
import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: `url(https://strapi.yathim.or.id/uploads/1638774020537_1_1024x768_aeea414878.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export default function Donasi({ data, dataHero }) {
  const { classes } = useStyles();
  return (
    <>
      <div style={{ marginTop: -200 }}>
        <HeroComp data={dataHero} seeCardDonasi={false} withButton={false} />
      </div>
      <Center sx={{ marginTop: 50 }}>
        <Badge color="teal" size="xl">
          <h2>Program Donasi</h2>
        </Badge>
      </Center>
      <CustomCard data={data} height={350} width={400} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://strapi.yathim.or.id/api/donasis?pagination[page]=1&pagination[pageSize]=10&populate=*`
  );
  const data = await res.json();
  const fetchHero = await fetch(
    `http://localhost:1337/api/home-pages?filters[id][$eq]=2&populate=*`
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
