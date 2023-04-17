import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import { Key, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const useStyles = createStyles((theme) => ({
  card: {
    // height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  mWidth: Number;
  mHeight: Number;
  seeButton: Boolean;
}

function Card({ image, title, category, mWidth, mHeight, seeButton }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})`, width: `${mWidth}`, height: `${mHeight}` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      {seeButton && (
        <Button variant="white" color="dark">
          Read article
        </Button>
      )}
    </Paper>
  );
}

export default function CarArComp({
  height,
  slideSize,
  orientation,
  slideGap,
  controlOffSet,
  data,
  mWidth,
  loop,
  seeButton,
  mHeight,
}: any) {
  const change = data.map((item: any) => ({
    ...item,
    image: `https://strapi.yathim.or.id${item}`,
  }));
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = change.map(
    (item: JSX.IntrinsicAttributes & CardProps, idx: Key | null | undefined) => (
      <Carousel.Slide key={idx}>
        <Card {...item} mWidth={mWidth} seeButton={seeButton} mHeight={mHeight} />
      </Carousel.Slide>
    )
  );

  return (
    <Carousel
      slideSize={slideSize}
      height={height}
      orientation={orientation}
      slideGap={slideGap}
      controlsOffset={controlOffSet}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      maw={1280}
      loop={loop}
    >
      {slides}
    </Carousel>
  );
}
