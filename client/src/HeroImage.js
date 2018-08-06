import React from 'react'

import './styles/HeroImage.css'

const HeroImage = (props) => (
  <div id="hero-image" >
    <div style={{ 'backgroundImage': `url(${props.image})` }}></div>
    <h1>{props.text}</h1>
  </div>
)

export default HeroImage
