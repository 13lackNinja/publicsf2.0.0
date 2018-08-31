import React, { Component } from 'react'

import './styles/HeroImage.css'
import './styles/ArrowBounce.css'

import downArrowImage from './images/down_arrow.svg'

class HeroImage extends Component {
  componentDidMount() {
    const downArrow = document.getElementById('down-arrow');

    function toggleArrow() {
      console.log('toggle');
      if (window.innerHeight > ((9 / 16) * window.innerWidth)) {
        downArrow.style.display = 'none';
      } else {
        downArrow.style.display = 'absolute';
      }
    }


    window.addEventListener('resize', toggleArrow);

    toggleArrow();
  }

  render() {
    return (
      <div id="hero-image" >
        <div style={{ 'backgroundImage': `url(${this.props.image})` }}></div>
        <h1 id="hero-image-text">{this.props.text}</h1>
        <img id="down-arrow" src={downArrowImage} className="arrow bounce"></img>
      </div>
    )
  }
}

export default HeroImage
