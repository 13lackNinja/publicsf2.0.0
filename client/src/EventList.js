import React, { Component } from 'react'
import EventModule from './EventModule.js'

class EventList extends Component {
  render() {
    return (
      <div id="event-list">
        <EventModule />
        <EventModule />
        <EventModule />
      </div>
    )
  }
}

export default EventList
