import React from 'react';
import { useRouter } from 'next/router';
import '../styles/main.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if(router.isFallback) {
    return <h1>Loading ...</h1>
  }

  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (

    <Layout user={pageProps.user} project={pageProps.project}>

      <Head>
        <title> MyCv </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />
      
    </Layout>
  )

}

export default MyApp
