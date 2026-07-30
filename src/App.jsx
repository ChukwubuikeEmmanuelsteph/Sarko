import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Partners from './components/Partners/Partners'
import Stats from './components/Stats/Stats'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import FloatingCards from './components/FloatingCards/FloatingCards'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FloatingCards />
      <About />
      <Partners />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
