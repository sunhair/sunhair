import Main from "../components/main-home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sun Hair Company</title>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <div>
        <Main />
      </div>
    </>
  );
}
