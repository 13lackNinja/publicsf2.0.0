import React from 'react'
import HeroImage from './HeroImage.js'
import NewsletterSignUp from './NewsletterSignUp.js'
import Grit from './Grit.js'
import TypeLogo from './TypeLogo.js'

import './styles/About.css'

import djImage from './images/dj15.jpg'
import corporateImage from './images/corporate1_dark.jpg'
import crowd3Image from './images/crowd3.jpg'
import miraImage from './images/mira.jpg'
import crowd4Image from './images/crowd4.jpg'
import pwmanholeImage from './images/pw_manhole_white.png'

const ClientLinks = () => (
  <div id="client-links">
    <a href="/intheworks">
      <button style={{ backgroundImage: `url(${djImage})` }}>
        <h1>In the works</h1>
      </button>
    </a>
    <a href="/privateevents">
      <button style={{ backgroundImage: `url(${corporateImage})` }}>
        <h1>Private Events</h1>
      </button>
    </a>
  </div>
)

const AboutDescription = () => (
  <div id="about-description">
    <TypeLogo type="about"/>
    <p>
      Public Works, at its core, is a space built for the people, by the people. We asked the community what they watned to see in a nightclub and event space, and they answered. From our sprung, hardwood dance floor to our state-of-the-art Funktion 1 sound system, we crowd-sourced our venue into existence.
    </p>
    <div
      className="about-description-image"
      style={{ 'background-image': `url(${miraImage})`}}
    >
    </div>
    <p>
      At Public Works, one can find a diverse program of events that includes world-class DJ sets, live performances, podcast recordings, comedy shows, and much more. Whether you are looking for a fun night out, an educational experience, or an inspiring meeting place, Public Works has got you covered.
    </p>
    <div
      className="about-description-image"
      style={{ 'background-image': `url(${crowd4Image})`}}
    >
    </div>
    <p>
      We also partner with local non-profits and offer an eclectic array of events so that we can directly engage with and give back to the communities that suport us. From fundraisers for elementary schools to locally produced art shows, we encourage and empower organizations that have a positive impact on our city and beyond.
    </p>
    <img src={pwmanholeImage} alt="pw_manhoe_white.png"/>
  </div>
)

const About = () => (
  <div id="about">
    <HeroImage text="About Us" image={crowd3Image}/>
    <AboutDescription />
    <ClientLinks />
    <NewsletterSignUp />
    <Grit />
  </div>
)

export default About
