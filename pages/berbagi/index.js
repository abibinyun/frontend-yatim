import React, { useRef } from 'react';
import { Paper, Space, Text, rem } from '@mantine/core';
import CardDonasi from '../../customComp/cardDonasi';

export default function berbagi() {
  return (
    <div>
      <Space h={30} />
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Paper shadow="md" radius="xl" p="xl">
          <Text>
            "Barang siapa mengerjakan kebaikan seberat zarah pun, niscaya dia akan melihat
            balasannya." - QS. Az-Zalzalah: 7 te
          </Text>
          <Text>
            Donasi adalah bagian dari sedekah, yakni pemberian secara sukarela untuk Allah atas
            sebagian harta yang dimiliki. Seseorang yang tidak memenuhi syarat untuk berzakat pun
            boleh untuk melakukan donasi. Karena Berbuat baik adalah kewajiban antar sesama manusia.
            dan untuk itulah kami YATHIM FOUNDATION membuat Program DONASI sebagai bentuk Penyaluran
            untuk para sahabat yang ingin menyisihkan sebagian rezeki nya agar lebih mudah.
          </Text>
        </Paper>
      </div>
      <Space h={50} />
      <div id="card-donasi" style={{ marginLeft: 20, marginRight: 20, paddingTop: 10 }}>
        <CardDonasi />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const resImgGalery = await fetch(`https://strapi.yathim.or.id/api/galeries?populate=*`);
  const dataImgGalery = await resImgGalery.json();
  if (!dataImgGalery) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataImgGalery,
    },
  };
}
