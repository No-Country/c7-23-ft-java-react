import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services.js/Services";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My turn app | home</title>
        <meta name="description" content="My turn app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Hero />
      <Services />

      <Footer />
    </div>
  );
}
