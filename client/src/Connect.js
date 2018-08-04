import React from 'react'
import HeroImage from './HeroImage.js'
import Marquee from './Marquee.js'
import FAQ from './FAQ.js'
import ContactForm from './ContactForm.js'
import NewsletterSignUp from './NewsletterSignUp.js'
import Grit from './Grit.js'

import './styles/Connect.css'

import pwMuralImage from './images/pw_mural.jpg'

const Connect = () => (
  <div id="connect">
    <HeroImage text="Connect" image={pwMuralImage} />
    <Marquee text="Do yourself a favor - Follow us @PublicSF" />
    <FAQ />
    <ContactForm />
    <NewsletterSignUp />
    <Grit />
  </div>
)

export default Connect
