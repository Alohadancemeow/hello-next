import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My app wtih next JS</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
