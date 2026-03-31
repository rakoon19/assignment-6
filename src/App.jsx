// import { useState } from 'react'
import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Feature from './Components/Feature/Feature'
import Cart from './Components/Cart/Cart'
import Step from './Components/Step/Step'
import Pricing from './Components/Pricing/Pricing'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'


function App() {
  const [featureBTN, setFeatureBTN] = useState('products')
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Feature setFeatureBTN={ setFeatureBTN } featureBTN={ featureBTN }></Feature>
    <Cart></Cart>
    <Step></Step> 
    <Pricing></Pricing>
    <Testimonial></Testimonial>
    <Footer></Footer>
    </>
  )
}

export default App
