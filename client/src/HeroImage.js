import React, { Component } from 'react'

import './styles/HeroImage.css'
import './styles/ArrowBounce.css'

import downArrowImage from './images/down_arrow.svg'

class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this);
  }

  componentDidMount() {
    const downArrow = document.getElementById('down-arrow');

    function toggleArrow() {
      if (window.innerHeight > ((9 / 16) * window.innerWidth)) {
        downArrow.style.display = 'none';
      } else {
        downArrow.style.display = 'absolute';
      }
    }

    function fadeOutArrow() {
      downArrow.style.opacity = (1 / ((window.scrollY + 1) * 0.2));
    }

    window.addEventListener('resize', toggleArrow);
    window.addEventListener('scroll', fadeOutArrow);

    toggleArrow();
  }

  scrollDown() {
    const heroImage = document.getElementById('hero-image');
    const heroImageHeight =
      heroImage.offsetHeight +
      heroImage.style.marginTop +
      heroImage.style.marginBottom;

    const options = {
      top: heroImageHeight,
      behavior: 'smooth'
    }

    window.scrollBy(options);
  }

  render() {
    return (
      <div id="hero-image" >
        <div style={{ 'backgroundImage': `url(${this.props.image})` }}></div>
        <h1 id="hero-image-text">{this.props.text}</h1>
        <img
          id="down-arrow"
          src={downArrowImage}
          className="arrow bounce"
          onClick={this.scrollDown}
          alt='hero'
        >
        </img>
      </div>
    )
  }
}

export default HeroImage
