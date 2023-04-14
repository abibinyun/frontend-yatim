import { createStyles, Card } from '@mantine/core';
import Image from 'next/legacy/image';

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },
}));

export function ArticlesCardsGrid({ data, width, height }) {
  const { classes } = useStyles();
  const myLoader = ({ src, width }) => {
    return `http://strapi.yathim.or.id/${src}?w=${width}`;
  };
  return (
    <div>
      <Card p="md" radius="md" component="a" className={classes.card}>
        <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
          <Image
            priority={true}
            loader={myLoader}
            src={`${data.url}`}
            height={height}
            width={width}
          />
        </div>
      </Card>
    </div>
  );
}
