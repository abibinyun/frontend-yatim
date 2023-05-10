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
        </Head>
      <NavbarComp links={tester} />
      <Component {...pageProps} />
      <Notifications />
      <FooterComp links={tester} />
    </>
  );
}
