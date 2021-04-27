import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Description from '../components/Description'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Statikaplus</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
      </Head>
      <main>
        <Header />
        <Description />
        <About />
        <Contact />
      </main>
    </>
  )
}
