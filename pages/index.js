import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Description from '../components/Description'

export default function Home() {
  return (
    <>
      <Head>
        <title>Statikalus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Description />
        <About />
      </main>
    </>
  )
}
