import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import ChatBot from './components/ChatBot'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ThemeSwitcher />
      <ChatBot />
    </div>
  )
}

export default App
