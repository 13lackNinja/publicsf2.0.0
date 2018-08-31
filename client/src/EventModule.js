import React from 'react'
import BuyButton from './BuyButton'

import './styles/EventModule.css'

class EventModule extends React.Component {
  render() {
    return (
      <div className="event-module-container">
        <div className="event-module-image">
          <h3 className="event-module-date">
            {this.props.date}
          </h3>
          <img src={this.props.image} alt="event module image"/>
        </div>
        <div className="event-module-text">
          <a href={`intheworks/${this.props.id}`}>
          <h3 className="event-module-date-mobile">
            {this.props.date}
          </h3>
            <h4 className="event-module-promoter">
              Public Works Presents
            </h4>
            <h2 className="event-module-artists">
              {this.props.name.split(' @')[0]}
            </h2>
          </a>
        </div>
        <div className="event-module-button">
          <BuyButton class={'buy-button buy-button-module'} id={this.props.id}/>
        </div>
      </div>
    )
  }
}

export default EventModule
