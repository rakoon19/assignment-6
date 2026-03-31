import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Feature from './Components/Feature/Feature'
import Step from './Components/Step/Step'
import Pricing from './Components/Pricing/Pricing'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

function App() {

  const [featureBTN, setFeatureBTN] = useState('products')
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar 
        cart={cart} 
        setFeatureBTN={setFeatureBTN}
      />

      <Hero />

      <About />

      <Feature 
        setFeatureBTN={setFeatureBTN} 
        featureBTN={featureBTN}
        cart={cart}
        setCart={setCart}
      />

      <Step />

      <Pricing />

      <Testimonial />

      <Footer />
    </>
  )
}

export default App