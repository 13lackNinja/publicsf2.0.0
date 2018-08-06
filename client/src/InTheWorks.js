import React from 'react'
import Carousel from './Carousel.js'
import Marquee from './Marquee.js'
import EventList from './EventList.js'
import NewsletterSignUp from './NewsletterSignUp.js'
import Grit from './Grit.js'

import './styles/InTheWorks.css'

import eightYearImage from './images/8yr.jpg'
import event1Image from './images/event1.jpg'
import event2Image from './images/event2.jpg'

const Events = () => (
  <div id="events">
    <Carousel
      images={[
        event1Image,
        event2Image,
        eightYearImage
      ]}
      showLastAnnounced={false}
    />
    <Marquee text="In the Works"/>
    <EventList />
    <NewsletterSignUp />
    <Grit />
  </div>
)

export default Events
