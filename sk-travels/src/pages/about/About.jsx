import React from 'react'
import Navbar from '../../components/Navbar'
import PageBanner from '../../components/PageBanner'
import AboutUs from './components/AboutUs'
import MissionVision from './components/MissionVision'
import WhyChooseUs from '../home/components/WhyChooseUs'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'

const About = () => {
    return (
        <div>
            <Navbar />
            <PageBanner
                eyebrow="About Us"
                title="About"
                highlight="SK Tour & Travels"
                subtitle="Comfortable, safe and reliable journeys for every trip, near or far."
                breadcrumb="About Us"
                note={["Travel", "Beyond", "Boundaries"]}
            />
            <AboutUs/>
            <MissionVision/>
            <WhyChooseUs/>
            <CTA/>
            <Footer/>
        </div>
    )
}

export default About