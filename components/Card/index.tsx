import { Card, Text, ActionIcon, Badge, Group, createStyles, rem, em } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { WhatsappShareButton, FacebookShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

const useStyles = createStyles((theme) => ({
  card: {
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
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
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
    <Card withBorder radius="md" className={cx(classes.card, className)} {...others}>
      <Card.Section>
        <Link {...linkProps}>
          <Image loader={myLoader} src={`${image}`} height={height} width={width} />
        </Link>
      </Card.Section>

      {/* <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {rating}
      </Badge> */}

      <Link {...linkProps} style={{ textDecoration: 'none' }}>
        <Text className={classes.title} fw={500}>
          {title}
        </Text>
      </Link>

      <Text fz="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group position="apart" className={classes.footer}>
        <Group spacing={8} mr={0} color="green">
          {/* <ActionIcon className={classes.action}> */}
          <WhatsappShareButton url={slugTitle}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          {/* </ActionIcon> */}
          {/* <ActionIcon className={classes.action}> */}
          <FacebookShareButton url={slugTitle}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          {/* </ActionIcon>  */}
        </Group>
      </Group>
    </Card>
  );
}
