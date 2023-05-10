import {
  Card,
  Text,
  ActionIcon,
  createStyles,
  rem,
  em,
  Button,
  Popover,
  Input,
  CopyButton,
  Tooltip,
} from '@mantine/core';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { IconCheck, IconCopy, IconShare } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'normal',
    position: 'relative',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width: '35%',
    [`@media (max-width: ${em(1550)})`]: {
      width: '25%',
    },
    [`@media (max-width: ${em(955)})`]: {
      width: '35%',
    },
    [`@media (max-width: ${em(800)})`]: {
      width: '35%',
    },
    [`@media (max-width: ${em(755)})`]: {
      width: '55%',
    },
    [`@media (max-width: ${em(555)})`]: {
      width: '75%',
    },
    [`@media (max-width: ${em(285)})`]: {
      width: '100%',
    },
  },

  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
    fontSize: 22,
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: 'auto',
    justifyContent: 'center',
    // width:'70%',
    display: 'flex',
  },
  btn1: {
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:0,
    borderTopRightRadius:0,
    marginRight:-20
  },
  btn2: {
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
  }
}));

interface ArticleCardProps {
  image: string;
  link: string;
  title: string;
  description: string;
  rating: string;
  author: {
    name: string;
    image: string;
  };
  slugTitle: string;
  height: any;
  width: any;
}

function CopyBtn({ value }: any) {
  return (
    <CopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
            {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

export function CardComp({
  className,
  image,
  link,
  title,
  description,
  author,
  rating,
  slugTitle,
  height,
  width,
  ...others
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
  const { classes, cx } = useStyles();
  const linkProps = { href: link };
  const myLoader = ({ src, width }: any) => {
    return `https://strapi.yathim.or.id/${src}?w=${width}`;
  };

  return (
    <Card withBorder radius="lg" shadow="lg" className={cx(classes.card, className)} {...others}>
      <Card.Section>
        <Link {...linkProps}>
          <Image loader={myLoader} src={`${image}`} height={height} width={width} />
        </Link>
      </Card.Section>

      <Link
        {...linkProps}
        style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'inherit' }}
      >
        <Text className={classes.title} fw={600}>
          {title}
        </Text>
      </Link>

      <Text fz="sm" color="dimmed" lineClamp={4} style={{ marginBottom: 30 }}>
        {description}
      </Text>

        <div className={classes.footer} style={{ marginLeft: 10, marginRight: 10 }}>
          <Link href={link}>
            <Button className={classes.btn1} color="green" style={{  height: 50, fontSize: 23 }}>
              Donasi Sekarang
            </Button>
          </Link>
          <Popover width={200} position="top" withArrow shadow="md">
            <Popover.Target>
              <Button className={classes.btn2} color="green" style={{ height: 50, fontSize: 23 }}>
                <IconShare />
              </Button>
            </Popover.Target>
            <Popover.Dropdown style={{ display: 'flex' }}>
              <Input value={`https://yathim.or.id/${link}`} />
              <CopyBtn value={`https://yathim.or.id/${link}`} />
            </Popover.Dropdown>
          </Popover>
        </div>
    </Card>
  );
}
