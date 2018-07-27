import React from 'react'
import HeroImage from './HeroImage.js'
import Marquee from './Marquee.js'
import AboutDescription from './AboutDescription.js'
import ClientLinks from './ClientLinks.js'
import NewsletterSignUp from './NewsletterSignUp.js'

import crowd3 from './images/crowd3.jpg'

const About = () => (
  <div id="about">
    <HeroImage text="About Us" image={crowd3}/>
    <Marquee />
    <AboutDescription />
    <ClientLinks />
    <NewsletterSignUp />
  </div>
)

export default About
