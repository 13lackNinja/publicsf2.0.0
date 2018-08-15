import React from 'react'

import './styles/EventModule.css'

const BuyButton = (props) => {
  let exampleCallback = () => {
    console.log('Order complete!');
  }

  window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: props.id,
    modal: true,
    modalTriggerElementId: `eventbrite-widget-modal-trigger-${props.id}`,
    onOrderComplete: exampleCallback
  });

  return (
    <button id={`eventbrite-widget-modal-trigger-${props.id}`} type="button">Buy Tickets</button>
  )
}

class EventModule extends React.Component {
  render() {
    return(
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
          <BuyButton id={this.props.id} />
        </div>
      </div>
    )
  }
}

export default EventModule
