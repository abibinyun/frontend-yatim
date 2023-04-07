import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { NavbarComp } from '../components/Navbar';
import { FooterComp } from '../components/Footer';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'light' ? 'dark' : 'light');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };
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
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NavbarComp links={tester} />
          <Component {...pageProps} />
          <Notifications />
          <FooterComp links={tester} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
