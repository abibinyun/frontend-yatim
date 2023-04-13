import { Center, Space, Button, createStyles } from '@mantine/core';
import Link from 'next/link';
import { FaqComp } from '../components/FAQ';
import { FeaturedComp } from '../components/Featured';
import { HeroComp } from '../components/Hero';
import CustomCard from '../customComp/customCard';
import CarArComp from '../components/CarArticle';
import { StatsComp } from '../components/Stats';
import Head from 'next/head';

const useStyle = createStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
  control: {
    marginTop: `calc(${theme.spacing.xl} * 1)`,
    marginBottom: '100px',

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
  wrapper: {
    display: 'flex',
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
  beritaArtikel: {
    marginLeft: 10,
    marginRight: 10,
    width: '50%',
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

const statsData = [
  {
    stats: '17.123',
    title: 'Tersalurkan',
    description:
      'Yathim.or.id telah menyalurkan semua hasil yang diperoleh kepada yang membutuhkan',
  },
  {
    stats: '1.123',
    title: 'Relawan',
    description: 'Kami juga telah bekerja sama dengan relawan untuk menyebarkan kebaikan',
  },
  {
    stats: '123',
    title: 'Cabang',
    description: 'Tersebar di segala penjuru',
  },
];

export default function HomePage({ data, dataHero, dataImgGalery }: any) {
  const { classes } = useStyle();
  const rawDtKurban = dataImgGalery.data[0].attributes.img_kurban.data;
  const datas = rawDtKurban.map((item: { attributes: any }) => item.attributes);
  const datar = datas.map((item: { url: any }) => item.url);
  const {imageHero, headline, title} = dataHero.data[0].attributes
  const imgHero = imageHero.data.attributes.url

  return (
    <>
      <Head>
        <meta property="og:url" content="https://yathim.or.id/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yathim.or.id | Yayasan Taman Harapan Insan Mulia" />
        <meta property="og:description" content={`${headline}|${title}`} />
        <meta property="og:image" content={`https://strapi.yathim.or.id${imgHero}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="yathim.or.id" />
        <meta property="twitter:url" content="https://yathim.or.id/" />
        <meta name="twitter:title" content="Yathim.or.id | Yayasan Taman Harapan Insan Mulia" />
        <meta name="twitter:description" content={`${headline}|${title}`} />
        <meta name="twitter:image" content={`https://strapi.yathim.or.id${imgHero}`} />
	   </Head>
    <div className={classes.root}>
    <link itemProp="thumbnailUrl" href={`https://strapi.yathim.or.id${imgHero}`} /> 
        <span itemProp="thumbnail" itemScope itemType="http://schema.org/ImageObject" /> 
        <link itemProp="url" href={`https://strapi.yathim.or.id${imgHero}`} />
      <div>
        <HeroComp data={dataHero} />
        <Space h={100} />
      </div>
      <Center>
        <div className="feature-section" style={{ marginTop: -50 }}>
          <FeaturedComp />
          <Space h={100} />
        </div>
      </Center>
      <div style={{ marginLeft: 50, marginRight: 50, marginBottom: 100 }}>
        <StatsComp data={statsData} />
      </div>
      <div className="program-donasi">
        <Center>
          <h1 style={{ textDecoration: 'underline' }}>Program Donasi</h1>
        </Center>

        <CustomCard data={data} />

        <Center>
          <Link href="/donasi">
            <Button
              className={classes.control}
              radius="xl"
              size="xl"
              variant="gradient"
              gradient={{ from: 'teal', to: 'lime', deg: 105 }}
              >
              Lihat semua donasi
            </Button>
          </Link>
        </Center>
        <Space h="md" />
      </div>

      <div className={classes.wrapper}>
        <div className="kegiatan" style={{ marginLeft: 10, marginRight: 10 }}>
          <Center>
            <h1 style={{ textDecoration: 'underline' }}>Kegiatan</h1>
          </Center>

          <div>
            <CarArComp
              height={440}
              controlOffSet={'xs'}
              orientation={'vertical'}
              slideGap={'xl'}
              slideSize={'30%'}
              imgArr={datas}
              />
          </div>

          <Center>
            <Link href="/galery">
              <Button
                className={classes.control}
                radius="xl"
                size="xl"
                variant="gradient"
                gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                >
                Lihat semua kegiatan
              </Button>
            </Link>
          </Center>
          <Space h="md" />
        </div>

        <Space w="md" />

        <div className={classes.beritaArtikel}>
          <Center>
            <h1 style={{ textDecoration: 'underline' }}>Berita & Artikel Terbaru</h1>
          </Center>

          <div>
            <CarArComp
              height={440}
              controlOffSet={'xs'}
              orientation={'horizontal'}
              slideGap={'xl'}
              slideSize={'50%'}
              imgArr={datas}
              />
          </div>

          <Center>
            <Link href="/blog">
              <Button
                className={classes.control}
                radius="xl"
                size="xl"
                variant="gradient"
                gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                >
                Lihat semua berita dan artikel
              </Button>
            </Link>
          </Center>
        </div>
      </div>
      <FaqComp />
    </div>
  </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://strapi.yathim.or.id/api/donasis?populate=*');
  const data = await res.json();
  const resHero = await fetch('http://strapi.yathim.or.id/api/home-pages?populate=*');
  const dataHero = await resHero.json();
  const resImgGalery = await fetch('http://strapi.yathim.or.id/api/galeries?populate=*');
  const dataImgGalery = await resImgGalery.json();
  if (!data || !dataHero) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data.data,
      dataHero,
      dataImgGalery,
    },
  };
}
