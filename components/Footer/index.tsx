import { createStyles, Anchor, Group, ActionIcon, rem, Container, em } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(60),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
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
      width: '30%',
    },
    [`@media (max-width: ${em(500)})`]: {
      width: '50%',
    },
    [`@media (max-width: ${em(285)})`]: {
      width: '55%',
      marginLeft: -5,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function FooterComp({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const router = useRouter();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));
  const logoClick = (e: MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault;
    router.push('/');
  };

  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.inner}>
          <Image
            className={classes.icon}
            style={{ borderRadius: '5px' }}
            src="/favicon.svg"
            height={150}
            width={250}
            alt="logo yathim.or.id"
            onClick={(e) => logoClick(e)}
          />

          <Group className={classes.links}>{items}</Group>

          <Group spacing="xs" position="right" noWrap>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandTwitter size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandYoutube size="1.05rem" stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </Container>
    </div>
  );
}
