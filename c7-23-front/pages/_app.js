import Head from "next/head";
import ReactQueryContainer from "../containers/ReactQueryContainer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryContainer dehydratedState={pageProps.dehydratedState}>
      <Head>
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>
      <main data-theme="corporate">
        <Component {...pageProps} />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryContainer>
  );
}

export default MyApp;
