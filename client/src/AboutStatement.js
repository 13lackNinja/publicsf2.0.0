import React from 'react'
import TypeLogo from './TypeLogo.js'

import './styles/AboutStatement.css'

import manhole from './images/pw_manhole.png'

const AboutStatement = () => (
  <div id="about-statement">
    <TypeLogo type="about" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel feugiat mauris. Ut augue nibh, faucibus vitae semper quis, imperdiet et libero. Proin vel libero ipsum. Suspendisse rhoncus porta est sit amet pharetra. Donec vulputate volutpat justo, a pulvinar felis mattis non.
    </p>
    <img src={manhole} alt="pw_manhole.png"/>
  </div>
)

export default AboutStatement
