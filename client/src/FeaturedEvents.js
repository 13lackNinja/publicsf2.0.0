import React, { Component } from 'react'

import './styles/index.css'
import './styles/FeaturedEvents.css'

import oddSalon from './images/odd_salon.jpg'
import rodJr from './images/rod_jr.jpg'
import robotaOblongata from './images/robota_oblongata.jpg'

const FeaturedEvent = (props) => (
  <div className="featured-event">
   <div
     className="featured-event-image"
     style={{ 'backgroundImage': `url(${props.event.image})`}}
   />
   <div className="featured-event-date">
     <h3>{props.event.date}</h3>
   </div>
   <div className="featured-event-artists">
    <React.Fragment>
      {props.event.artists.map((artist, index) => (
        <h3 key={index}>{artist}</h3>
      ))}
    </React.Fragment>
   </div>
   <button className="event-button">More Info</button>
 </div>
)

class FeaturedEvents extends Component {
  constructor(props) {
    super(props);
    this.featuredEvents = {
      'rodJr': {
        'date': 'Friday, March 2nd',
        'artists': [
          'Rodriguez Jr',
          'Patrice Bämuel',
          'Thomas Von Party'
        ],
        'image': rodJr
      },
      'oddSalon': {
        'date': 'Tuesday, March 6th',
        'artists': [
          'Odd Salon'
        ],
        'image': oddSalon
      },
      'robotaOblongata': {
        'date': 'Saturday, March 3rd',
        'artists': [
          'Robota Oblongata',
          'SF Burnal Equinox'
        ],
        'image': robotaOblongata
      }
    }
  }

  render() {
    return (
      <div id="in-the-works">
        <h1>In the works</h1>
        <div id="featured-events-container">
          <FeaturedEvent
            event={this.featuredEvents.rodJr}
          />
          <FeaturedEvent
            event={this.featuredEvents.robotaOblongata}
          />
          <FeaturedEvent
            event={this.featuredEvents.oddSalon}
          />
        </div>
        <button id="view-all-events">View all events</button>
      </div>
    )
  }
}


export default FeaturedEvents
