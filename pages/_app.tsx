import Head from 'next/head';
import { NavbarComp } from '../components/Navbar';
import { FooterComp } from '../components/Footer';
import ToastComp from '../components/Toast';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import client from '../client';

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
        <link rel="icon" type="image/png" href="./favicon.svg" />
      </Head>
      <NavbarComp links={tester} />
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <div>
        <ToastComp />
      </div>
      <FooterComp links={tester} />
    </>
  );
}
