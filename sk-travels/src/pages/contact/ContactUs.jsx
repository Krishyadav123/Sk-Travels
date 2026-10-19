import React from 'react'
import Navbar from '../../components/Navbar'
import Contact from '../home/components/Contact'
import Footer from '../../components/Footer'

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <div className='py-20 bg-black'>
            <Contact/>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs