import Head from 'next/head';
import { Notifications } from '@mantine/notifications';
import { NavbarComp } from '../components/Navbar';
import { FooterComp } from '../components/Footer';

export default function App({ Component, pageProps }: any) {
  const tester = [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/donasi',
      label: 'Program Donasi',
    },
    {
      link: '/galery',
      label: 'Galery',
    },
    {
      link: '/blog',
      label: 'Blog',
    },
    {
      link: '/about',
      label: 'About',
    },
  ];
  return (
    <>
      <Head>
        <title>Yathim.or.id | Yayasan Taman Harapan Insan Mulia</title>
        <link rel="icon" type="image/png" href="./favicon.svg"/>
        {/* <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name='title' property='og:title' content='Official website'/>
        <meta name='type' property='og:type' content='website'/>
        <meta name='url' property='og:url' content='https://yathim.or.id/'/>
        <meta name='image' property='og:image' content='https://strapi.yathim.or.id/uploads/thumbnail_logo_yathim_or_id_c9774978dd.png'/>
        <meta name='site_name' property='og:site_name' content='Yathim.or.id'/>
        <meta name='description' property='og:description' content='Yayasan Taman Harapan Insan Mulia (YATHIM) Adalah lembaga nirlaba milik umat atau masyarakat, yang dapat mengangkat harkat sosial kemanusiaan kaum dhuafa. Dengan berzakat, infaq, sodaqoh, wakaf serta dana-dana yang dihalalkan oleh syari’at dan legal dari perorangan, kelompok masyarakat, perusahaan maupun lembaga lainnya.  '/> */}
      </Head>
      <NavbarComp links={tester} />
      <Component {...pageProps} />
      <Notifications />
      <FooterComp links={tester} />
    </>
  );
}
