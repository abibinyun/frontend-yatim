// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

import { Center, Space, Button, createStyles  } from '@mantine/core';
import { FaqComp } from '../components/FAQ';
import { FeaturedComp } from '../components/Featured';
import { HeroComp } from '../components/Hero';
import CustomCard from '../customComp/customCard';
import CardDonasi from '../customComp/cardDonasi';

const useStyle = createStyles ((theme) => ({
  control: {
    marginTop: `calc(${theme.spacing.xl} * 1)`,
    marginBottom: '100px',

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}))

export default function HomePage({ data, dataHero }: any) {
const {classes} = useStyle()
console.log(dataHero)
  return (
    <>
    <div>

      <div className='hero-section'>
          <HeroComp data={dataHero} />
          <Space h={100} />
      {/* <div style={{ width: 300, zIndex:5 , marginTop: -650, marginBottom: 250, marginLeft: 1000 }}>
        <CardDonasi />
      </div> */}
      </div>

    </div>

          <div  className='feature-section'>
            <FeaturedComp />
            <Space h={100} />
          </div>
      
          <div className='program-donasi'>
              <Center>
                <h1 style={{ textDecoration:'underline' }}>Program Donasi</h1>
              </Center>

                <CustomCard data={data} />
            
              <Center>
                <Button className={classes.control} radius="xl" size="xl" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                  Lihat semua donasi
                </Button>
              </Center>
            <Space h="md" />
          </div>
      
          <div className='kegiatan'>
              <Center>
                <h1 style={{ textDecoration:'underline' }}>Kegiatan</h1>
              </Center>
          
                <CustomCard data={data} />
            
              <Center>
                <Button className={classes.control} radius="xl" size="xl" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                  Lihat semua kegiatan
                </Button>
              </Center>
            <Space h="md" />
          </div>

          <div className='berita-artikel'>
            <Center>
                <h1 style={{ textDecoration:'underline' }}>Berita & Artikel Terbaru</h1>
            </Center>
                
                <CustomCard data={data} />

                <Center>
                  <Button className={classes.control} radius="xl" size="xl" variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                    Lihat semua berita dan artikel
                  </Button>
                </Center>
              <Space h="md" />
          </div>

      <FaqComp />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:1337/api/donasis?populate=*');
  const data = await res.json();
  const resHero = await fetch('http://localhost:1337/api/home-pages?populate=*');
  const dataHero = await resHero.json();
  if (!data || !dataHero){
    return{
      notFound: true
    }
  }
  return {
    props: {
      data: data.data,
      dataHero,
    },
  };
}