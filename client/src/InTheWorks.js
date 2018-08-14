import React from 'react'
import { Switch, Route } from 'react-router-dom'
import EventPage from './EventPage.js'
import Carousel from './Carousel.js'
import Marquee from './Marquee.js'
import EventList from './EventList.js'
import NewsletterSignUp from './NewsletterSignUp.js'
import Grit from './Grit.js'

import './styles/InTheWorks.css'

import eightYearImage from './images/8yr.jpg'
import event1Image from './images/event1.jpg'
import event2Image from './images/event2.jpg'

const AllEvents = () => (
  <React.Fragment>
    <Carousel
      images={[
        event1Image,
        event2Image,
        eightYearImage
      ]}
    />
    <Marquee text="In the Works"/>
    <EventList />
    <NewsletterSignUp />
    <Grit />
  </React.Fragment>
)

const InTheWorks = () => (
  <div id="in-the-works">
    <Switch>
      <Route exact path="/intheworks" component={AllEvents}></Route>
      <Route path='/intheworks/:event' render={
        ({ match }) => (
          <EventPage id={match.params.event} />
        )
      }></Route>
    </Switch>
  </div>
)

export default InTheWorks
