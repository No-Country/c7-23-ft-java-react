import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mi turno | home</title>
        <meta name="description" content="Mi turno app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen flex justify-center items-center ">
        <h1 className="text-5xl">Welcome to Next.js!</h1>
        <button className="btn">Button</button>
      </main>
    </div>
  );
}
