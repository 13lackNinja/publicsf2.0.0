import React from 'react'

import './styles/HeroImage.css'

const HeroImage = (props) => (
  <div
    id="hero-image-container"
    style={{ backgroundImage: `url(${props.image})` }}
>
    <h1>{props.text}</h1>
  </div>
)

export default HeroImage
