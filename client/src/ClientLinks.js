import React from 'react'

import './styles/ClientLinks.css'

import djImage from './images/dj6.jpg'
import corporateImage from './images/info-header.png'

const ClientLinks = () => (
  <div id="client-links-container">
    <a href="/intheworks">
      <button
        className="client-link-button"
        id="client-link-intheworks"
        style={{ backgroundImage: `url(${djImage})` }}
      >
        <h1>In the works</h1>
      </button>
    </a>
    <a href="/corporate">
      <button
        id="client-link-corporate"
        className="client-link-button"
        style={{ backgroundImage: `url(${corporateImage})` }}
      >
        <h1>Corporate</h1>
      </button>
    </a>
  </div>
)

export default ClientLinks
