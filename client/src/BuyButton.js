import React from 'react'

import './styles/BuyButton.css'

const BuyButton = (props) => {
  // let exampleCallback = () => {
  //   console.log('Order complete!');
  // }
  //
  // requestAnimationFrame(() => {
  //   window.EBWidgets.createWidget({
  //     widgetType: 'checkout',
  //     eventId: props.id,
  //     modal: true,
  //     modalTriggerElementId: `eventbrite-widget-modal-trigger-${props.id}`,
  //     onOrderComplete: exampleCallback
  //   });
  // });

  return (
    <a href={props.url} target="_blank">
      <button className={props.class} id={`eventbrite-widget-modal-trigger-${props.id}`} type="button">Tickets</button>
    </a>
  )
}

export default BuyButton
