import '../styles/main.scss'
import React, { ComponentType } from 'react'
import { AppInitialProps, AppProps } from 'next/app'
import PrimeReact, { addLocale, locale } from 'primereact/api';
import Head from 'next/head';
import { primeOptions } from '@utils/mock';

PrimeReact.ripple = true;

addLocale('tr', primeOptions);

locale('tr');

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { Layout, Title }: any = Component;
  const Container = Layout ? Layout : React.Fragment;
  return (
    <Container> 
      <Head>
        <title>{Title || 'Yükgetir'}</title>
      </Head>
        <Component {...pageProps} /> 
    </Container>
  )
}


const App = (props: AppProps) => {

  return (
        <MyApp {...props} />
  )
}

export default App

