import React from 'react'
import BuyButton from './BuyButton'

import './styles/EventModule.css'

const Event = (props) => {
  return (
    <a href={props.url} target="_blank">
    <div className="event-module-container">
      <div className="event-module-image">
        <h3 className="event-module-date">
          {props.date}
        </h3>
        <img src={props.image} alt="event"/>
      </div>
      <div className="event-module-text">
        <h3 className="event-module-date-mobile">
          {props.date}
        </h3>
          <h2 className="event-module-artists">
            {props.name.split(' @')[0]}
          </h2>
      </div>
      <div className="event-module-button">
        <BuyButton class={'buy-button buy-button-module'} id={props.id} url={props.url}/>
      </div>
    </div>
    </a>
  )
}

class EventModule extends React.Component {
  render() {
    if (this.props.image && this.props.description.startsWith('http')) {
      return <Event image={this.props.image} url={this.props.description} date={this.props.date} name={this.props.name} id={this.props.id}/>
    } else if (!this.props.image && this.props.description.text.startsWith('http')) {
      return <Event image={this.props.backupImage} url={this.props.description} date={this.props.date} name={this.props.name} id={this.props.id}/>
    } else if (this.props.image) {
      return <Event image={this.props.image} url={this.props.url} date={this.props.date} name={this.props.name} id={this.props.id}/>
    } else {
      return <Event image={this.props.backupImage} date={this.props.date} name={this.props.name} id={this.props.id}/>
    }
  }
}

export default EventModule
