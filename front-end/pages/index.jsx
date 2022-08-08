import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sun Hair Company</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
