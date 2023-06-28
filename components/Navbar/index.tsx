import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  px,
  em,
  Space,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import { MouseEvent } from 'react';
import Link from 'next/link';

const HEADER_HEIGHT = rem(80);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'sticky',
    zIndex: 10,
    marginTop: -20
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  togle: {
    [`@media (max-width: ${em(1400)})`]: {
      marginRight: -100,
    },
    [`@media (max-width: ${em(1044)})`]: {
      marginRight: -10,
    },
  },
  icon: {
    [`@media (max-width: ${em(1400)})`]: {
      marginLeft: -60,
    },
    [`@media (max-width: ${em(1044)})`]: {
      marginLeft: -10,
    },
    [`@media (max-width: ${em(850)})`]: {
      width: '85%',
    },
    [`@media (max-width: ${em(500)})`]: {
      width: '80%',
    },
    [`@media (max-width: ${em(285)})`]: {
      width: '80%',
      marginLeft: -5,
    },
    [`@media (max-width: ${em(250)})`]: {
      width: '70%',
      marginLeft: -5,
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    marginLeft: px(-130),
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  togleBurger: {
    marginLeft: -80,
    zIndex: 1,
    display: 'inline-flex',
  },

  burger: {
    paddingTop: 20,
    display: 'inline-flex',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: 'green' }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function NavbarComp({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const router = useRouter();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        router.push(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));
  const logoClick = (e: MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault;
    router.push('/');
  };
  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Link href={'/'}>
          <div className={classes.icon}>
            <Image
              style={{ borderRadius: '5px' }}
              src="/favicon.svg"
              height={150}
              width={250}
              priority={true}
              alt="logo yathim.or.id"
            />
          </div>
        </Link>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <div className={classes.togleBurger}>
          <div className={classes.togle}></div>
          <Space w="md" />
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </div>
      </Container>
    </Header>
  );
}
