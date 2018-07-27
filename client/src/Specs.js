import React from 'react'
import HeroImage from './HeroImage'
import NewsletterSignUp from './NewsletterSignUp.js'

import './styles/Specs.css'

import floorPlanImage from './images/pw_floorplan.jpg'
import mainRoomImage from './images/pw_mainroom.png'
import loftImage from './images/pw_loft.png'
import galleryImage from './images/pw_gallery.png'

const SpecsHeader = () => (
  <div id="specs-header">
    <h1>Specs</h1>
  </div>
)

const SpecsImage = (props) => (
  <div
    id={`specs-image-${props.index}`}
    className="specs-image"
    image={props.image}
    style={{ backgroundImage: `url(${props.image})` }}
  ></div>
)

const SpecsInfo = () => (
  <div id="specs-info">
    <div className="specs-text" id="specs-text-1">
      <h2>The Main Room</h2>
      <ul>
        <li>5000 sq. feet</li>
        <li>700 standing, 160 sitting</li>
        <li>Function One soundsystem</li>
        <li>Immersive projector display</li>
        <li>Turnkey video system</li>
        <li>Flexible breakout areas</li>
        <li>Full-service bar</li>
      </ul>
    </div>
    <SpecsImage index={1} image={mainRoomImage} />
    <div className="specs-text" id="specs-text-2">
      <h2>The Loft</h2>
      <ul>
        <li>1645 sq. feet</li>
        <li>206 standing, 80 seated</li>
        <li>Function One soundsystem</li>
        <li>Double projector display</li>
        <li>Full-service bar</li>
      </ul>
    </div>
    <SpecsImage index={2} image={loftImage} />
    <div className="specs-text" id="specs-text-3">
      <h2>The Gallery</h2>
      <ul>
        <li>1645 sq. feet</li>
        <li>206 standing, 80 seated</li>
        <li>Function One soundsystem</li>
        <li>Double projector display</li>
        <li>Full-service bar</li>
      </ul>
    </div>
    <SpecsImage index={3} image={galleryImage} />
  </div>
)

const Specs = () => (
  <div id="specs">
    <SpecsHeader />
    <HeroImage image={floorPlanImage} />
    <SpecsInfo />
    <NewsletterSignUp />
  </div>
)

export default Specs
