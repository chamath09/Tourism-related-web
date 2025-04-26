import React from 'react'
import Hero from './Hero/page'
import Destination from './destination/page'
import Hotel from './hotel/page'
import WhyChooseUs from './services/page'
import AboutUs from './about/page'
import ContactUs from './contact/page'


const Home = () => {
  return (
    <div>
        <Hero />
        <Destination/>
        <Hotel/>
        <AboutUs/>
        <WhyChooseUs/>
        <ContactUs/>
    </div>
  )
}

export default Home