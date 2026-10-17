import React from 'react'
import Navbar from '../../components/Navbar'
import PageBanner from '../../components/PageBanner'
import OurTravelServices from './components/OurTravelServices'
import Fleet from "../home/components/Fleet";
import WhyChooseUs from '../home/components/WhyChooseUs'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'

const Services = () => {
    return (
        <div>
            <Navbar />
            <PageBanner
                eyebrow="Services"
                title="Our Services"
                highlight="SK Tour & Travels"
                subtitle="Comfortable, safe and reliable journeys for every trip, near or far."
                breadcrumb="Services"
                note={["Travel", "Beyond", "Boundaries"]}
            />
            <Fleet/>
            <OurTravelServices/>
            <WhyChooseUs/>
            <CTA/>
            <Footer/>
        </div>
    )
}

export default Services