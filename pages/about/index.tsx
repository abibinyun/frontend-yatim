import React from 'react';
import { HeroComp } from '../../components/Hero';
import { ContactUs } from '../../components/ContactComp';
import { Card, Center, Paper, Space, Text, createStyles, em } from '@mantine/core';
import Image from 'next/legacy/image';

const useStyle = createStyles((theme) => ({
  containerDiv: {
    marginTop: 100,
    width: '75%',
  },
  containerCard: {
    display: 'flex',
    width: '100%',
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    [`@media (max-width:${em(1200)})`]: {
      display: 'inline-block',
    },
  },
  containerText: {
    width: '55%',
    marginLeft: 50,

    [`@media (max-width:${em(1200)})`]: {
      marginLeft: 0,
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    [`@media (max-width:${em(550)})`]: {
      marginLeft: 0,
      height: '30%',
    },
  },
  containerImg: {
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    [`@media (max-width:${em(1200)})`]: {
      width: '100%',
    },
  },
  title: {
    [`@media (max-width:${em(1500)})`]: {
      fontSize: 25,
      width: '100%',
    },
    [`@media (max-width:${em(600)})`]: {
      fontSize: 27,
      width: '100%',
    },
  },
  description: {
    [`@media (max-width:${em(1500)})`]: {
      fontSize: 15,
      width: '100%',
    },
    [`@media (max-width:${em(600)})`]: {
      fontSize: 18,
      width: '100%',
    },
  },
  divContactus: {
    // width:'100%',
    [`@media (max-width:${em(1349)})`]: {
      display: 'block',
      marginRight: 30,
      marginLeft:30,
    },
  },
  iframe: {
    // boxShadow: '3px 3px 20px 0.5px' ,
    [`@media (max-width:${em(1349)})`]: {
      display: 'inline-block',
      width:'100%'
    },
  }
  
}));

export default function About({ dataHero }: any) {
  const { classes } = useStyle();
  const myLoader = ({ src, width }: any) => {
    return `https://strapi.yathim.or.id${src}?w=${width}`;
  };
  return (
    <>
      <div>
        <div style={{ marginTop: -200 }}>
          <HeroComp data={dataHero} seeCardDonasi={false} withButton={false} />
        </div>

        <Center>
          <div className={classes.containerDiv}>
            <Center>
              <Card shadow="lg" padding="xl" className={classes.containerCard}>
                <Card.Section>
                  <Center>
                    <Image
                      loader={myLoader}
                      src="/uploads/IMG_20230306_WA_0007_8fb88979c9.jpg"
                      height={350}
                      width={700}
                      alt="No way!"
                      className={classes.containerImg}
                    />
                  </Center>
                </Card.Section>
                <div className={classes.containerText}>
                  <Text weight={800} className={classes.title}>
                    Official Website YATHIM.OR.ID
                  </Text>
                  <Text color="dimmed" className={classes.description}>
                    Adalah lembaga nirlaba milik umat atau masyarakat, yang dapat mengangkat harkat
                    sosial kemanusiaan kaum dhuafa. Dengan berzakat, infaq, sodaqoh, wakaf serta
                    dana-dana yang dihalalkan oleh syari’at dan legal dari perorangan, kelompok
                    masyarakat, perusahaan maupun lembaga lainnya.
                  </Text>
                </div>
              </Card>
            </Center>

            <Center>
              <Card shadow="lg" padding="xl" className={classes.containerCard}>
                <div className={classes.containerText} style={{ marginRight: 50, marginLeft: 0 }}>
                  {/* <Text weight={800} className={classes.title} >
                  Official Website YATHIM.OR.ID
                </Text> */}
                  <Text color="dimmed" className={classes.description} style={{ marginBottom: 20 }}>
                    Yayasan Taman Harapan Insan Mulia (YATHIM) Adalah lembaga nirlaba milik umat
                    atau masyarakat, yang dapat mengangkat harkat sosial kemanusiaan kaum dhuafa.
                    Dengan berzakat, infaq, sodaqoh, wakaf serta dana-dana yang dihalalkan oleh
                    syari’at dan legal dari perorangan, kelompok masyarakat, perusahaan maupun
                    lembaga lainnya.
                  </Text>
                </div>
                <Card.Section>
                  <Center>
                    <Image
                      loader={myLoader}
                      src="/uploads/IMG_20220807_WA_00411_1_768x576_0cd8c55830.jpg"
                      height={450}
                      width={700}
                      alt="No way!"
                      className={classes.containerImg}
                      style={{ marginBottom: 20 }}
                    />
                  </Center>
                </Card.Section>
              </Card>
            </Center>

            <Center style={{ marginBottom: 100 }}>
              <Paper shadow="xl" radius="md" p="xl">
                <Text>
                  Dengan berdasar pada situasi dan kondisi saat melanda nya wabah pandemi corona 19
                  yang seluruh dunia terpapar dan khususnya Indonesia membuat KAMI, beberapa sahabat
                  terpanggil untuk ikut meringankan beban Pemerintah terhadap masyarakat indonesia
                  umumnya dan khususnya yatim dan dhuafa yang belum tersentuh oleh tangan
                  Pemerintah. <br />
                  <br />
                  Alhamdulillah pada akhirnya terbentuklah satu lembaga nirlaba yang kami beri nama
                  YAYASAN TAMAN HARAPAN INSAN MULIA ( YATHIM ) merupakan wadah sosial yang bertujuan
                  sebagai sarana mediasi, menerima, maupun menyalurkan untuk para yatim dan dhuafa
                  yang membutuhkan umumnya masyarakat luas serta khususnya masyarakat sekitar.
                  <br />
                  <br />
                  Tujuan didirikan YATHIM Yayasan didirikan sebagai tempat yang diumpamakan seperti
                  Taman yang didalamnya terdapat keindahan, keriangan dan kesenangan, dimana dengan
                  wadah inilah sahabat atau teman yang satu pandangan serta memiliki tujuan utama
                  yaitu berbagi kepada seluruh masyarakat. <br />
                  <br />
                  Pada saat berdiri Yayasan ini seluruh dunia khususnya Indonesia sedang mengalami
                  wabah pandemi atau sering disebut COVID 19, sehingga keberadaan kami Yayasan Taman
                  Harapan Insan Mulia bagi masyarakat sekitar khususnya dan umumnya masyarakat
                  Indonesia, bisa sedikitnya meringankan beban mereka sekaligus membantu pemerintah
                  dalam hal Sosial dan Keagamaan dimana masih banyak masyarakat yang belum tersentuh
                  oleh pemerintah.
                </Text>
              </Paper>
            </Center>
          </div>
        </Center>

        <Center className={classes.divContactus} style={{ marginLeft: 20, marginRight:20 }}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.004921116593!2d106.7399481!3d-6.3290379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efbbc083fdf9%3A0xf00e12ffabb870cc!2sLEMTARA!5e0!3m2!1sen!2sid!4v1682598505578!5m2!1sen!2sid" 
              width="400"
              height="400"
              style={{ borderRadius:20, border:'none' }}
              allowFullScreen={true}
              loading="lazy"
              className={classes.iframe}
            ></iframe>
          </div>
          <Space w={30} />
          <div>
            <ContactUs />
          </div>
        </Center>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const fetchHero = await fetch(
    `https://strapi.yathim.or.id/api/home-pages?filters[id][$eq]=5&populate=*`
  );
  const dataHero = await fetchHero.json();
  if (!dataHero) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataHero,
    },
  };
}
