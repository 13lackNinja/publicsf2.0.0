import React from 'react'
import Carousel from './Carousel.js'
import Marquee from './Marquee.js'
import AboutStatement from './AboutStatement.js'
import InTheWorks from './InTheWorks.js'
import NewsletterSignUp from './NewsletterSignUp.js'

const Home = () => (
  <div id="home">
    <Carousel />
    <Marquee />
    <AboutStatement />
    <InTheWorks />
    <NewsletterSignUp />
  </div>
)

export default Home
