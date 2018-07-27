import React, { Component } from 'react'
import FeaturedEvent from './FeaturedEvent.js'

import './styles/index.css'
import './styles/InTheWorks.css'

import oddSalon from './images/odd_salon.jpg'
import rodJr from './images/rod_jr.jpg'
import robotaOblongata from './images/robota_oblongata.jpg'

class InTheWorks extends Component {
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


export default InTheWorks
