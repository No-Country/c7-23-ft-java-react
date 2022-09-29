import ReactQueryContainer from "../containers/ReactQueryContainer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryContainer dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </ReactQueryContainer>
  );
}

export default MyApp;
