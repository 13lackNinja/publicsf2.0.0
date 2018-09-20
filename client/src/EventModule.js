import React from 'react'
import BuyButton from './BuyButton'

import './styles/EventModule.css'

class EventModule extends React.Component {
  render() {
    if (this.props.image) {
      return (
        <a href={this.props.url} target="_blank">
        <div className="event-module-container">
          <div className="event-module-image">
            <h3 className="event-module-date">
              {this.props.date}
            </h3>
            <img src={this.props.image} alt="event"/>
          </div>
          <div className="event-module-text">
            <h3 className="event-module-date-mobile">
              {this.props.date}
            </h3>
              <h2 className="event-module-artists">
                {this.props.name.split(' @')[0]}
              </h2>
          </div>
          <div className="event-module-button">
            <BuyButton class={'buy-button buy-button-module'} id={this.props.id} url={this.props.url}/>
          </div>
        </div>
        </a>
      )
    } else return (
      <div className="event-module-container">
        <div className="event-module-image">
          <h3 className="event-module-date">
            {this.props.date}
          </h3>
          <img src={this.props.backupImage} alt="event"/>
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
          <BuyButton class={'buy-button buy-button-module'} id={this.props.id} url={this.props.url}/>
        </div>
      </div>
    )

  }
}

export default EventModule
