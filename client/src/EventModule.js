import React from 'react'

import './styles/EventModule.css'

class EventModule extends React.Component {
  render() {
    return(
      <a className="event-module-link" href={`/intheworks/${this.props.id}`}>
        <div className="event-module-container">
          <img
            className="event-module-image"
            src={this.props.image}
            alt="event_image"
          >
          </img>
          <div className="event-module-text">
            <h3 className="event-module-date">
              {this.props.date}
            </h3>
            <h4 className="event-module-promoter">
              {'presents'}
            </h4>
            <h2 className="event-module-artists">
              {this.props.name}
            </h2>
            <button>Buy Tickets</button>
          </div>
        </div>
      </a>
    )
  }
}

export default EventModule
