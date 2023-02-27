import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import '@/styles/globals.css'
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
