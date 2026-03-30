// import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Testimonial from './Components/Testimonial/Testimonial'


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    {/* <Feature></Feature>
    <FeatureCard></FeatureCard>
    <Step></Step>
    <StepCard></StepCard>
    <Pricing></Pricing>
    <PricingCard></PricingCard> */}
    <Testimonial></Testimonial>
    {/* <Footer></Footer> */}
    </>
  )
}

export default App
