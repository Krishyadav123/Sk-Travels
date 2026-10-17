import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './components/Hero'
import Fleet from './components/Fleet'
import WhyChooseUs from './components/WhyChooseUs'
import Destinations from './components/Destinations'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Fleet/>
        <WhyChooseUs/>
        <Destinations/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home