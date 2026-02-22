import React from 'react'
import HeroSection from '../Components/Hero'
import AboutSection from '../Components/AboutSection'
import RoomsOffer from '../Components/Rooms'
import TestimonialSection from '../Components/Testimonials'
import ExclusiveRooms from '../Components/Exclusive'
import AmenitiesSection from '../Components/Amentities'
import CtaSection from '../Components/CTA'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <RoomsOffer/>
        <ExclusiveRooms/>
        <AmenitiesSection/>
        <TestimonialSection/>
        <CtaSection/>
    </div>
  )
}

export default Home