import Main from "../components/main-home";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" />
      <Head>
        <title>Sun Hair Company</title>
      </Head>
      <div>
        <Main />
      </div>
    </>
  ); 
} 
  