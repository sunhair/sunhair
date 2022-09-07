import Head from "next/head";
import Script from 'next/script';

import Header from '../../components/header-product';
import Main from '../../components/main-product';
import Footer from "../../components/footer";


export default function Product() {
  return (
    <> 
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"/>
      <Head>
        <title>Product</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" /> 
               
      </Head>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}
