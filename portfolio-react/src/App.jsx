import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Nav from './components/Nav.jsx'
import SplashCursor from './components/SplashCursor.jsx'
import SoftAurora from './components/SoftAurora.jsx'
import GradualBlur from './components/GradualBlur.jsx'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        {/* <SoftAurora 
          color1="#4c1d95" 
          color2="#0f172a" 
          speed={0.6} 
        /> */}
      </div>
      {/* <SplashCursor /> */}
      <GradualBlur />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}