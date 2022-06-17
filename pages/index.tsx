import type { NextPage } from 'next';
import Main from "@components/Main";
import Head from 'next/head';

const Home: NextPage = () => {
  return (
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Zoltán Szikszó - Software Developer</title>
        </Head>
        <main className="max-w-4xl mx-auto antialiased">
          <Main/>
        </main>
      </div>
  )
}

export default Home