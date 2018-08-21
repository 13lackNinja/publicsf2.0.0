import React from 'react'
import HeroImage from './HeroImage.js'
// import Marquee from './Marquee.js'
import NewsletterSignUp from './NewsletterSignUp.js'
import Grit from './Grit.js'
import TypeLogo from './TypeLogo.js'

import './styles/About.css'

import djImage from './images/dj6.jpg'
import corporateImage from './images/corporate1_dark.jpg'
import blueBoltImage from './images/blue_bolt_dark.jpg'

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
    <TypeLogo type="white" />
    <div id="about-description-text">
      <p>
        Public Works, at its core, is a space built for the people, by the people. We asked the community what they wanted to see in a nightclub and event space, and they answered. From our sprung, hardwood dance floor to our state-of-the-art Funktion 1 sound system, we literally crowd-sourced public works into existence.
      </p>
      <p>
        As a community gathering spot, public works strives to embrace and support the richly varied landscape of bay area culture. With an emphasis on the creative arts amidst an increasingly technological world, one can find a diverse program of events that include world-class DJ sets and live performances, podcast recordings, comedy shows, and much more. Whether you are looking for a fun night out, an educational experience, or an inspiring meeting place, public works has got you covered.
      </p>
      <p>
        While acting as a hub for the bay area's thriving underground music and arts scenes, public works also serves the community at large. By partnering with local non-profits and offering an eclectic array of events, we are able to directly engage with and give back to the communities that support us. From fundraisers for elementary schools to locally-produced art show, we encourage and empower organizations that have a positive impact on local communities.
      </p>
    </div>
  </div>
)

const About = () => (
  <div id="about">
    <HeroImage text="About Us" image={blueBoltImage}/>
    {/* <Marquee text="Giving the people what they want"/> */}
    <AboutDescription />
    <ClientLinks />
    <NewsletterSignUp />
    <Grit />
  </div>
)

export default About
