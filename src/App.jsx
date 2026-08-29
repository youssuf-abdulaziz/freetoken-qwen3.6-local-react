import { ThemeProvider } from './ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="page">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
