import React from 'react'

import eventResponse from './eventResponse.js'

import './styles/EventModule.css'

const EventModule = () => (
  <div className="event-module-container">
    <img
      className="event-module-image"
      src={eventResponse.events[0].image}
      alt="event_image"
    >
    </img>
    <div className="event-module-text">
      <h3 className="event-module-date">
        {eventResponse.events[0].startDate.toDateString()}
      </h3>
      <h4 className="event-module-promoter">
        {eventResponse.events[0].promoterName + 'presents'}
      </h4>
      <h2 className="event-module-artists">
        {eventResponse.events[0].headlinersName}
      </h2>
      <a href={eventResponse.events[0].ticketPurchaseURL}>
        <button>Buy Tickets</button>
      </a>
    </div>
  </div>
)

export default EventModule
