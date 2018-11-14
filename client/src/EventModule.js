import React from 'react'
import BuyButton from './BuyButton'

import './styles/EventModule.css'

const Event = (props) => {

  const startTime = props.time.split('T')[1];

  function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }

    time.splice(3, 1);
    time.splice(3, 0, ' ');

    return time.join (''); // return adjusted time or original string
  }

  const time = tConvert(startTime);


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
          <p className="event-module-time">
            {time}
          </p>
      </div>
      <div className="event-module-button">
        <BuyButton class={'buy-button buy-button-module'} id={props.id} url={props.url}/>
        <p className="event-module-price">{props.price}</p>
      </div>
    </div>
    </a>
  )
}

class EventModule extends React.Component {
  render() {
    if (this.props.image && this.props.description.startsWith('http')) {
      return <Event image={this.props.image} url={this.props.description} date={this.props.date} name={this.props.name} id={this.props.id} time={this.props.time} price={this.props.price}/>
    } else if (!this.props.image && this.props.description.text.startsWith('http')) {
      return <Event image={this.props.backupImage} url={this.props.description} date={this.props.date} name={this.props.name} id={this.props.id} time={this.props.time} price={this.props.price}/>
    } else if (this.props.image) {
      return <Event image={this.props.image} url={this.props.url} date={this.props.date} name={this.props.name} id={this.props.id} time={this.props.time} price={this.props.price}/>
    } else {
      return <Event image={this.props.backupImage} date={this.props.date} name={this.props.name} id={this.props.id} time={this.props.time} price={this.props.price}/>
    }
  }
}

export default EventModule
