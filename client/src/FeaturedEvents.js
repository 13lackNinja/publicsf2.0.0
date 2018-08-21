import React, { Component } from 'react'

import './styles/index.css'
import './styles/FeaturedEvents.css'

const FeaturedEvent = (props) => (
  <div className="featured-event">
   <div
     className="featured-event-image"
     style={{ 'backgroundImage': `url(${props.image})`}}
   />
   <div className="featured-event-date">
     <h3>{props.date}</h3>
   </div>
   <div className="featured-event-artists">
    <h3>{props.name}</h3>
   </div>
   <button className="event-button">More Info</button>
 </div>
)

class FeaturedEvents extends Component {
  render() {

    if (this.props.events) {
        const featuredEvents = this.props.events.map((e) => {
        return (
          <FeaturedEvent
            key={e.id}
            id={e.id}
            name={e.name.text}
            date={
              new Date(e.start.local).toDateString()
            }
            image={e.logo.original.url}
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
