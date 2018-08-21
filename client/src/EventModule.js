import React from 'react'
import BuyButton from './BuyButton'

import './styles/EventModule.css'

class EventModule extends React.Component {
  render() {
    return(

      <div className="event-module-container">
        <a href={`/intheworks/${this.props.id}`}>
          <img
            className="event-module-image"
            src={this.props.image}
            alt="event_image"
          />
        </a>
        <div className="event-module-text">
          <a href={`/intheworks/${this.props.id}`}>
            <h3 className="event-module-date">
              {this.props.date}
            </h3>
            <h4 className="event-module-promoter">
              {'Public Works Presents'}
            </h4>
            <h2 className="event-module-artists">
              {this.props.name}
            </h2>
          </a>
          <BuyButton class={'buy-button buy-button-module'} id={this.props.id} />
        </div>
      </div>

    )
  }
}

export default EventModule
