import React from 'react';
import CustomCard from '../../customComp/customCard';
import { Center, Image } from '@mantine/core';
import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage: 'url(http://localhost:1337/uploads/1638774020537_1_1024x768_aeea414878.jpg)',
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

export default function Donasi({ data }) {
  const { classes, cx } = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />
        <div className={classes.inner}>
          <Title className={classes.title}>
            <Text component="span" inherit className={classes.highlight}></Text>
          </Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}></Text>
          </Container>
          <div className={classes.controls}></div>
        </div>
        <div></div>
      </div>
      <Center style={{ marginTop: 50, marginBottom: 50 }}>
        <h1>Program Donasi</h1>
      </Center>
      <CustomCard data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:1337/api/donasis?populate=*');
  const data = await res.json();
  // const resHero = await fetch('http://localhost:1337/api/home-pages?populate=*');
  // const dataHero = await resHero.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data,
      // dataHero,
    },
  };
}

// import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';

// const useStyles = createStyles((theme) => ({
//   wrapper: {
//     position: 'relative',
//     paddingTop: rem(180),
//     paddingBottom: rem(130),
//     backgroundImage:
//       'url(http://localhost:1337/uploads/IMG_20210905_114423_1024x769_0c6b127636.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',

//     [theme.fn.smallerThan('xs')]: {
//       paddingTop: rem(80),
//       paddingBottom: rem(50),
//     },
//   },

//   inner: {
//     position: 'relative',
//     zIndex: 1,
//   },

//   title: {
//     fontWeight: 800,
//     fontSize: rem(40),
//     letterSpacing: rem(-1),
//     paddingLeft: theme.spacing.md,
//     paddingRight: theme.spacing.md,
//     color: theme.white,
//     marginBottom: theme.spacing.xs,
//     textAlign: 'center',
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,

//     [theme.fn.smallerThan('xs')]: {
//       fontSize: rem(28),
//       textAlign: 'left',
//     },
//   },

//   highlight: {
//     color: theme.colors[theme.primaryColor][4],
//   },

//   description: {
//     color: theme.colors.gray[0],
//     textAlign: 'center',

//     [theme.fn.smallerThan('xs')]: {
//       fontSize: theme.fontSizes.md,
//       textAlign: 'left',
//     },
//   },

//   controls: {
//     marginTop: `calc(${theme.spacing.xl} * 1.5)`,
//     display: 'flex',
//     justifyContent: 'center',
//     paddingLeft: theme.spacing.md,
//     paddingRight: theme.spacing.md,

//     [theme.fn.smallerThan('xs')]: {
//       flexDirection: 'column',
//     },
//   },

//   control: {
//     height: rem(42),
//     fontSize: theme.fontSizes.md,

//     '&:not(:first-of-type)': {
//       marginLeft: theme.spacing.md,
//     },

//     [theme.fn.smallerThan('xs')]: {
//       '&:not(:first-of-type)': {
//         marginTop: theme.spacing.md,
//         marginLeft: 0,
//       },
//     },
//   },

//   secondaryControl: {
//     color: theme.white,
//     backgroundColor: 'rgba(255, 255, 255, .4)',

//     '&:hover': {
//       backgroundColor: 'rgba(255, 255, 255, .45) !important',
//     },
//   },
// }));

// export default function HeroBlog() {
//   const { classes, cx } = useStyles();

//   return (
//     <div className={classes.wrapper}>
//       <Overlay color="#000" opacity={0.65} zIndex={1} />

//       <div className={classes.inner}>
//         <Title className={classes.title}>
//           {/* Automated AI code reviews for{' '} */}
//           <Text component="span" inherit className={classes.highlight}>
//             {/* any stack */}
//           </Text>
//         </Title>

//         <Container size={640}>
//           <Text size="lg" className={classes.description}>
//             {/* Build more reliable software with AI companion. AI is also trained to detect lazy
//             developers who do nothing and just complain on Twitter. */}
//           </Text>
//         </Container>

//         <div className={classes.controls}>
//           {/* <Button className={classes.control} variant="white" size="lg">
//             Get started
//           </Button>
//           <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
//             Live demo
//           </Button> */}
//         </div>
//       </div>
//     </div>
//   );
// }
