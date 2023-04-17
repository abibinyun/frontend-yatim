import { createStyles, Group, ActionIcon, rem, Container, em, Badge } from '@mantine/core';
import { IconBrandFacebook, IconBrandGmail , IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    <Link href={link.link}>
      <Badge color="green" size="x">
        <p>{link.label}</p>
      </Badge>
    </Link>
  ));
  const logoClick = (e: any) => {
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
            <Link href={'https://www.facebook.com/thimfoundation/'} target="_blank">
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandFacebook size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link href={'https://www.youtube.com/@yathimofficial9224/videos'} target="_blank">
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandYoutube size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link
              href={'https://www.instagram.com/yathim.official/?igshid=YmMyMTA2M2Y%3D'}
              target="_blank"
            >
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandInstagram size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Link>
          </Group>
        </div>
      </Container>
    </div>
  );
}
