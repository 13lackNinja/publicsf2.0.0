import React from 'react'
import BuyButton from './BuyButton'

import './styles/FeaturedEventModule.css'

class FeaturedEventModule extends React.Component {
  render() {
    return (
      <div className="featured-event-module-container">
        <div className="featured-event-module-top">
          <a href={`intheworks/${this.props.id}`}>
          <img
            className="featured-event-module-image"
            src={this.props.image}
            alt="event_image"/>
          </a>
          <div className="featured-event-module-text">
            <a href={`intheworks/${this.props.id}`}>
              <h3 className="event-module-date">
                {this.props.date}
              </h3>
              <h4 className="featured-event-module-promoter">
                Public Works Presents
              </h4>
              <h2 className="featured-event-module-artists">
                {this.props.name.split(' @')[0]}
              </h2>
            </a>
          </div>
        </div>
        <div className="featured-event-module-bottom">
          <BuyButton class={'buy-button buy-button-module'} id={this.props.id}/>
        </div>
      </div>
    )
  }
}

export default FeaturedEventModule
