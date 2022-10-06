import ReactQueryContainer from "../containers/ReactQueryContainer";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryContainer dehydratedState={pageProps.dehydratedState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReactQueryContainer>
  );
}

export default MyApp;
