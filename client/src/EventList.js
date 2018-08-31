import React from 'react'

import './styles/EventList.css'

const EventList = (props) => (
  <div id="event-list">
    <h1>In The Works</h1>
    {props.events}
  </div>
)

export default EventList
