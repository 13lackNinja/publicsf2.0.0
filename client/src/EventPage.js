import React from 'react'
import BuyButton from './BuyButton'

import './styles/EventPage.css'

const EventPage = (props) => {
  if (props.loaded) {
    return (
      <div id="event-page">
        <h1>{props.name}</h1>
        <img src={props.image} alt={props.image}/>
        <h4>{props.date}</h4>
        <p>{props.description}</p>
        <BuyButton class={'buy-button'} id={props.id} url={props.url}/>
      </div>
    )
  } else return (
    <div id="event-page">Loading...</div>
  )
}

export default EventPage
