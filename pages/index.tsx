import { Center, Space, Button, createStyles, rem, Badge } from '@mantine/core';
import Link from 'next/link';
// import { FaqComp } from '../components/FAQ';
import { FeaturesComp } from '../components/Featured';
import { HeroComp } from '../components/Hero';
import CustomCard from '../customComp/customCard';
// import CarArComp from '../components/CarArticle';
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
    stats: '2.340',
    title: 'Tersalurkan',
    description:
      'Yathim.or.id telah menyalurkan semua hasil yang diperoleh kepada yang membutuhkan',
  },
  {
    stats: '38',
    title: 'Relawan',
    description: 'Kami juga telah bekerja sama dengan relawan untuk menyebarkan kebaikan',
  },
  {
    stats: '1',
    title: 'Cabang',
    description: 'Menjangkau seluruh Indonesia',
  },
];

export default function HomePage({ data, dataHero, dataGalery, dataFAQ }: any) {
  const { imageHero, headline, title } = dataHero.data[0].attributes;
  // const { data: FAQdata } = dataFAQ;

  const imgHero = imageHero.data.attributes.url;
  // const mapFAQ = FAQdata.map((item: { attributes: any }) => item.attributes);
  const { classes } = useStyle();
  const idPage = 'Berbagi Kebaikan';

  const dataToast = [
    {
      nama: 'abi',
      pesan: 'semangat',
    },
    {
      nama: 'manda',
      pesan: 'ayooo semangat',
    },
  ];

  return (
    <>
      <Head>
        <meta property="og:url" content={`https://yathim.or.id`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yathim.or.id | Yayasan Taman Harapan Insan Mulia" />
        <meta property="og:description" content={`${headline}|${title}`} />
        <meta property="og:image" content={`https://strapi.yathim.or.id${imgHero}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="yathim.or.id" />
        <meta property="twitter:url" content={`https://yathim.or.id`} />
        <meta name="twitter:title" content="Yathim.or.id | Yayasan Taman Harapan Insan Mulia" />
        <meta name="twitter:description" content={`${headline}|${title}`} />
        <meta name="twitter:image" content={`https://strapi.yathim.or.id${imgHero}`} />
      </Head>

      <div className={classes.root}>
        <link itemProp="thumbnailUrl" href={`https://strapi.yathim.or.id${imgHero}`} />
        <span itemProp="thumbnail" itemScope itemType="http://schema.org/ImageObject" />
        <link itemProp="url" href={`https://strapi.yathim.or.id${imgHero}`} />
        {/* Hero Component */}
        <div>
          <HeroComp data={dataHero} seeCardDonasi={true} withButton={true} idPage={idPage} />
          <Space h={100} />
        </div>
        {/* Featured Component */}
        <Center>
          <div className="feature-section" style={{ marginTop: -50 }}>
            <FeaturesComp />
            <Space h={100} />
          </div>
        </Center>
        {/* Status Component */}
        <div style={{ marginLeft: 50, marginRight: 50, marginBottom: 100 }}>
          <StatsComp data={statsData} />
        </div>
        {/* Program Donasi */}
        <div className="program-donasi">
          <Center>
            <Badge color="green" size="xl">
              <h3>Program Donasi</h3>
            </Badge>
          </Center>

          <CustomCard data={data} height={350} width={400} />

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
        <Center className={classes.wrapper}>
          {/* Kegiatan */}
          <div className="kegiatan" style={{ marginTop: 17, marginLeft: 10, marginRight: 10 }}>
            {/* <Center sx={{ marginBottom: 50 }}>
              <Badge color="green" size="xl">
                <h3>Kegiatan</h3>
              </Badge>
            </Center> */}

            {/* <div>
              <CarArComp
                height={400}
                controlOffSet={'xs'}
                orientation={'vertical'}
                slideGap={'xl'}
                slideSize={'50%'}
                data={dataGalery}
                mWidth={rem(400)}
                mHeight={rem(400)}
                loop={true}
              />
            </div> */}

            {/* <Center>
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
            </Center> */}
            {/* <Space h="md" />
          </div>
          <Space w="md" /> */}
            {/* Berita & Artikel */}
            {/* <div className={classes.beritaArtikel}>
            <Center sx={{ marginBottom: 50 }}>
              <Badge color="green" size="xl">
                <h3>Berita dan Artikel</h3>
              </Badge>
            </Center> */}

            {/* <div>
              <CarArComp
                height={440}
                controlOffSet={'xs'}
                orientation={'horizontal'}
                slideGap={'xl'}
                slideSize={'10%'}
                data={map2}
                mWidth={rem(280)}
                mHeight={rem(400)}
                loop={true}
                seeButton={true}
              />
            </div> */}

            {/* <Center>
              <Link href="/blog">
                <Button
                  className={classes.control}
                  sx={{ marginTop: -15 }}
                  radius="xl"
                  size="xl"
                  variant="gradient"
                  gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                >
                  Lihat semua berita dan artikel
                </Button>
              </Link>
            </Center> */}
          </div>
        </Center>
        {/* FAQ component */}
        {/* <FaqComp data={mapFAQ} /> */}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const fetchDonasi = await fetch(
    `https://strapi.yathim.or.id/api/donasis?populate=*&pagination[limit]=6`
  );
  const dataDonasi = await fetchDonasi.json();
  const fetchHero = await fetch(`https://strapi.yathim.or.id/api/home-pages?populate=*`);
  const dataHero = await fetchHero.json();
  const resGalery = await fetch(
    `https://strapi.yathim.or.id/api/galeries?fields[0]=title&populate[img][fields][0]=url`
  );
  const dataGalery = await resGalery.json();
  const fetchFAQ = await fetch(`https://strapi.yathim.or.id/api/faqs?populate=*`);
  const dataFAQ = await fetchFAQ.json();
  if (!dataDonasi || !dataHero || !dataGalery || !dataFAQ) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: dataDonasi.data,
      dataHero,
      dataGalery,
      dataFAQ,
    },
  };
}
