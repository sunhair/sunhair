import Main from "../components/main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sun Hair Company</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <div>
        <Main />
      </div>
    </>
  );
}
