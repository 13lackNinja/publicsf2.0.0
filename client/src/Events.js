import React from 'react'
import HeroImage from './HeroImage.js'
import Marquee from './Marquee.js'
import EventList from './EventList.js'
import NewsletterSignUp from './NewsletterSignUp.js'
import Grit from './Grit.js'

import './styles/Events.css'

import eightYearImage from './images/8yr.jpg'

const Events = () => (
  <div id="events">
    <HeroImage image={eightYearImage} />
    <Marquee text="In the Works"/>
    <EventList />
    <NewsletterSignUp />
    <Grit />
  </div>
)

export default Events
