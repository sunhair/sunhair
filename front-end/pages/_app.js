import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.scss";
import Head from "next/head";
import {CartProvider} from '../context/cart';
import "animate.css/animate.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Head>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
