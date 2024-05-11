import { AppProps } from 'next/app';

import Head from 'next/head';
import '../styles/main.css';
import { AppConfig } from '../config/AppConfig';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>{AppConfig.title}</title>;
      <link rel="shortcut icon" href={AppConfig.favIcon} />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;


<title>{AppConfig.title}</title>