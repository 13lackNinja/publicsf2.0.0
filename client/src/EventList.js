import React from 'react'

import './styles/EventList.css'

const EventList = (props) => (
  <div id="event-list">
    {props.events}
  </div>
)

export default EventList
