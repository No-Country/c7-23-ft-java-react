import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";
import Hero from "../components/Hero/Hero";
import Services from "../components//Services/index";
import About from "../components/About";
import Contact from "../components/Contact";

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
      <About />
      <Contact />

      <Footer />
    </div>
  );
}
