import React from 'react'
import HeroImage from './HeroImage'
import FAQ from './FAQ.js'
import ContactForm from './ContactForm.js'
import NewsletterSignUp from './NewsletterSignUp.js'

import './styles/Connect.css'

import pwMuralImage from './images/pw_mural.jpg'

const Connect = () => (
  <div id="connect">
    <HeroImage text="Connect" image={pwMuralImage} />
    <FAQ />
    <ContactForm />
    <NewsletterSignUp />
  </div>
)

export default Connect
