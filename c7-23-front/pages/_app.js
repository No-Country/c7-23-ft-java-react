import ReactQueryContainer from "../containers/ReactQueryContainer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ReactQueryContainer dehydratedState={pageProps.dehydratedState}>
      <main data-theme="corporate">
        <Component {...pageProps} />
      </main>
    </ReactQueryContainer>
  );
}

export default MyApp;
