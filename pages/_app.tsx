import Head from 'next/head';
import { NavbarComp } from '../components/Navbar';
import { FooterComp } from '../components/Footer';
import ToastComp from '../components/Toast';
import { useEffect, useState } from 'react';
import { Flex } from '@mantine/core';
import { PulseLoader, SyncLoader } from 'react-spinners';
import { useAtom } from 'jotai';
import { loadingAtom } from '../customComp/cardDonasi';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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

export default function App({ Component, pageProps }: any) {
  const [loading, setLoading] = useState(true);
  const [loadingFromCardDonasi] = useAtom(loadingAtom);
  console.log('loading atom : ', loadingFromCardDonasi);

  const queryClient = new QueryClient()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  return (
    <div id="container" style={{ width: '100%', height: '100%' }}>
      {loading ? (
        <Flex justify={'center'} align={'center'} w={'100%'} h={'100vh'}>
          <PulseLoader color="#08e32d" size={20} loading={loading} />
        </Flex>
      ) : loadingFromCardDonasi ? (
        <Flex justify={'center'} align={'center'} w={'100%'} h={'100vh'}>
          <SyncLoader color="#08e32d" size={20} loading={loadingFromCardDonasi} />
        </Flex>
      ) : (
        <div>
          <Head>
            <title>Yathim.or.id | Yayasan Taman Harapan Insan Mulia</title>
            <link rel="icon" type="image/png" href="./favicon.svg" />
          </Head>
          <NavbarComp links={tester} />
          <QueryClientProvider client={queryClient}>

          <Component {...pageProps} />
          </QueryClientProvider>
          <div>
            <ToastComp />
          </div>
          <FooterComp links={tester} />
        </div>
      )}
    </div>
  );
}
