import React from 'react'

import './styles/FeaturedEvent.css'

const FeaturedEvent = (props) => (
  <div className="featured-event">
   <div
     className="featured-event-image"
     style={{ 'backgroundImage': `url(${props.event.image})`}}
   />
   <div className="featured-event-date">
     <h3>{props.event.date}</h3>
   </div>
   <div className="featured-event-artists">
    <React.Fragment>
      {props.event.artists.map((artist, index) => (
        <h3 key={index}>{artist}</h3>
      ))}
    </React.Fragment>
   </div>
   <button className="event-button">More Info</button>
 </div>
)

export default FeaturedEvent
