import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Description from '../components/Description'
import Contact from '../components/Contact'
import Form from '../components/Form'
import Footer from '../components/Footer'
import QuestionList from '../components/QuestionList'
import ProjectList from '../components/ProjectList'
import { useEffect, useRef } from 'react'

export default function Home() {

  let aboutRef = useRef(null)
  let projectRef = useRef(null)
  let faqRef = useRef(null)
  let contactRef = useRef(null)

  let refs = [aboutRef,projectRef,faqRef,contactRef]

  const scrollHere = (ref) => {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
  }

  return (
    <>
      <Head>
        <title>Statikaplus</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
      </Head>
      <main>
        <Header scrollHandle={scrollHere} references={refs} />
        <Description />
        <div ref={aboutRef}>
        <About />
        </div>
        <div ref={projectRef}>
        <ProjectList />
        </div>
        <div ref={faqRef}>
        <QuestionList />
        </div>
        <div ref={contactRef}>
        <Contact />
        </div>
        <Form />
        <Footer scrollHandle={scrollHere} references={refs} />
      </main>
    </>
  )
}
