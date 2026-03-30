// import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Pricing from './Components/Pricing/Pricing'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    {/* <Feature></Feature>
    <FeatureCard></FeatureCard>
    <Step></Step>
    <StepCard></StepCard> */}
    <Pricing></Pricing>
    {/* <PricingCard></PricingCard>  */}
    <Testimonial></Testimonial>
    <Footer></Footer>
    </>
  )
}

export default App
