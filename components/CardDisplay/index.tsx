import { Carousel } from '@mantine/carousel';
import { AspectRatio, Image } from '@mantine/core';

const images = [
  {
    image: 'qwerty',
  },
];

export default function CardGalery({ data }: any) {
  const slides = images.map((url, idx) => (
    <Carousel.Slide key={idx}>
      <AspectRatio ratio={1080 / 1080}>
        <Image src={`http://localhost:1337${data}`} />
      </AspectRatio>
    </Carousel.Slide>
  ));

  return (
    <>
      //{' '}
      <Carousel maw={520} mx="auto" withIndicators>
        {slides}
        //{' '}
      </Carousel>
    </>
  );
}
