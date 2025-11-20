import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import InfoSections from './components/InfoSections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Floating wave background with light neon accents */}
      <div className="fixed inset-0 -z-10 opacity-[0.15]">
        <div className="absolute -top-20 -left-20 w-[42rem] h-[42rem] rounded-full bg-rose-300 blur-3xl mix-blend-multiply"/>
        <div className="absolute top-10 right-0 w-[36rem] h-[36rem] rounded-full bg-indigo-300 blur-3xl mix-blend-multiply"/>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-sky-300 blur-3xl mix-blend-multiply"/>
      </div>

      <Hero />
      <About />
      <Projects />
      <Skills />
      <InfoSections />
      <Footer />
    </div>
  )
}

export default App
