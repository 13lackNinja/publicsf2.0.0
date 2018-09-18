import React, { Component } from 'react'
import FeaturedEventModule from './FeaturedEventModule'

import './styles/index.css'
import './styles/FeaturedEvents.css'

class FeaturedEvents extends Component {
  render() {
    if (this.props.events) {
        const featuredEvents = this.props.events.map((e) => {
        return (
          <FeaturedEventModule
            key={e.id}
            id={e.id}
            name={e.name.text}
            date={
              new Date(e.start.local).toDateString()
            }
            image={e.logo.original.url}
            url={e.url}
          />
        )
      });

      return (
        <div id="in-the-works">
          <h1>In the works</h1>
          <div id="featured-events-container">
            {featuredEvents}
          </div>
          <a href="/intheworks">
            <button className="button-underline" id="view-all-events">View all events</button>
          </a>
        </div>
      )

    } else return null
  }
}


export default FeaturedEvents
