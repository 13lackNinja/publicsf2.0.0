import React, { Component } from 'react'
import EventModule from './EventModule.js'

class EventList extends Component {
  render() {
    return (
      <div id="event-list">
        <h1>All Events</h1>
        <EventModule />
        <EventModule />
        <EventModule />
      </div>
    )
  }
}

export default EventList
