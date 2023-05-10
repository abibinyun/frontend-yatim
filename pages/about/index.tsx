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
    [`@media (max-width:${em(1349)})`]: {
      display: 'block',
      marginRight: 30,
      marginLeft: 30,
    },
  },
  iframe: {
    [`@media (max-width:${em(1349)})`]: {
      display: 'inline-block',
      width: '100%',
    },
  },
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
                  <Text color="dimmed" className={classes.description} style={{ marginBottom: 20 }}>
                    Taman Pendidikan Al-Qur'an (TPQ) Insan Mulia merupakan program pendidikan
                    Yayasan Taman Harapan Insan Mulia yang diketuai langsung oleh Saudara Maulana
                    Ishak. Dan Penanggung Jawab TPQ Insan Mulia adalah Ibu Suprihatin selaku ketua
                    Yayasan Taman Harapan Insan Mulia. TPQ Insan Mulia beralamat di Jl. Haji Jamat,
                    Gang Rais RT 03 RW 05 Kel. Buaran Kec. Serpong, Tangerang Selatan. TPQ Insan
                    Mulia sudah mulai berjalan pada tahun 2020 dan baru diresmikan oleh Ketua IPQ
                    (Ikatan Pendidik Al-Qur'an) Tangsel oleh Bapak Rosli. S. P.d pada tanggal 13
                    februari 2022. Dan kini TPQ Insan Mulia sudah memiliki surat izin operasional.
                  </Text>
                </div>
                <Card.Section>
                  <Center>
                    <Image
                      loader={myLoader}
                      src="/uploads/png_20230510_102139_0000_075838fe23.png"
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
                  <Center>
                    <h3>√ Misi & Visi TPQ Insan Mulia</h3>
                  </Center>
                  <Paper shadow="xl" radius="md" p="xl">
                    <Text>
                      <h4>• Misi</h4>
                      Mewujudkan generasi islam yang cinta Al-Qur'an, teguh keimanan, dan berakhlak
                      mulia
                      <h4>• Visi</h4>
                      1. Memahami cara baca Al-Qur'an sesuai dengan ilmu tajwid
                      <br />
                      2. Membiasakan untuk senantiasa menghafalkan Al-Qur'an, berdzikir, dan
                      bershalawat
                      <br />
                      3. Menanamkan akhlak yang mulia dalam berinteraksi dengan orang tua, teman,
                      dan masyarakat. <br />
                      4. Menerapkan ajaran-ajaran islam berlandaskan Al-Qur'an dan Hadits di
                      kehidupan sehari-hari sehingga dapat menjadi generasi yang qur'ani. <br />
                      <br />
                    </Text>
                  </Paper>
                  <br />
                  <br />
                  Proses belajar mengajar di TPQ Insan Mulia menggunakan metode Ilman Wa Ruuhan
                  (IWR). Setelah tuntas materi Jilid 1 maka akan ada evaluasi untuk kenaikan Jilid
                  berikutnya, hingga sampai ke Jilid 6. Kemudian setelah lulus jilid 6 akan
                  dievaluasi kembali untuk naik ke tingkat Al-Qur'an. Di dalam pengajarannya TPQ
                  Insan Mulia dibagi menjadi dua kelas. Untuk anak-anak usia 5-8 tahun akan
                  diarahkan ke dalam kelas Annas bin Malik. Untuk anak-anak usia 9 tahun ke atas
                  akan diarahkan ke dalam kelas Uwais Al-Qorni. TPQ Insan Mulia mempunyai 4 program
                  pembelajaran : <br />
                  <Paper shadow="xl" radius="md" p="xl">
                    <Text>
                      1. Pembelajaran TPQ Reguler <br />
                      Senin-Kamis <br />
                      - Kelas Annas bin Malik : 16.00 -17.15 WIB
                      <br />
                      - Kelas Uwais Al-Qorni : 18.30 - 20.00 WIB
                      <br />
                      2. Bimbel Malam
                      <br />
                      Jumat & Ahad : 18.30-20.00 WIB <br />
                      3. Calistung <br />
                      Sabtu & Ahad : 16.00-17.15 WIB <br />
                      4. Majelis Ta'lim Ummahatus Shalihah (dikhususkan untuk Orangtua/Dewasa){' '}
                      <br />
                      Dilaksanakan setiap hari Sabtu, 18.30 - 20.15 WIB. <br /><br />
                      Tenaga kependidikan di TPQ Insan Mulia terdapat 4 pendidik : <br />
                      <Paper shadow="xl" radius="md" p="xl">
                        <Text>
                          1. Ust. Maulana Ishak <br />
                          2. Ustdz. Juwita Rista Pratiwi <br />
                          3. Ustdz. Husnul Aulia <br />
                          4. Ustdz. Soimah <br />
                        </Text>
                      </Paper>
                      <br />
                      Adapun Jumlah Santri atau Peserta didik TPQ Insan Mulia berjumlah 35 santri.
                      Kebanyakan berasal dari warga sekitar. Untuk saat ini TPQ Insan Mulia masih
                      menyewa Ruko 1 lantai sebagai sarana dan prasarana kegiatan belajar dan
                      mengajar.
                      <br />
                      <br />
                    </Text>
                  </Paper>
                  <br />
                  <br />
                </Text>
              </Paper>
            </Center>
          </div>
        </Center>

        <Center className={classes.divContactus} style={{ marginLeft: 20, marginRight: 20 }}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15862.004921116593!2d106.7399481!3d-6.3290379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efbbc083fdf9%3A0xf00e12ffabb870cc!2sLEMTARA!5e0!3m2!1sen!2sid!4v1682598505578!5m2!1sen!2sid"
              width="400"
              height="400"
              style={{ borderRadius: 20, border: 'none' }}
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
