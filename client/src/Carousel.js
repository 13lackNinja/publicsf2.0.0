import React, { Component } from 'react'

import './styles/Carousel.css'

import crowdDaze from './images/crowd_daze.jpg'
import scan20 from './images/scan20.jpg'
import scan22 from './images/scan22.jpg'

const Slide = (props) => (
  <div
    id="image-container"
    style={{ backgroundImage: `url(${props.image})` }}>
  </div>
)

class Circle extends Component {
  constructor(props) {
    super(props);
    this.on = '#ededed';
    this.off = '#111111';
  }

  render() {
    return (
      <svg className="circle-svg">
        <circle
          fill={
            this.props.index === this.props.position ?
            this.on : this.off
          }>
        </circle>
      </svg>
    );
  }
}

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = { position: 1 }
    this.images = [
      scan20,
      crowdDaze,
      scan22
    ];
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.rotate(), 16000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  rotate() {
    // Define Variables
    const imageContainer = document.getElementById('image-container');
    let position = this.state.position;

    // Update Position
    if (position === 3) {
      position = 1;
    } else {
      position ++;
    }

    // Fade Out
    imageContainer.style.opacity = '0';

    // Set State and Fade In
    setTimeout(
      () => {
        imageContainer.style.opacity = '1';
        this.setState({ position: position });
      }, 3000
    );

  }

  render() {
    return (
      <div id="carousel-container">
        <Slide image={this.images[this.state.position - 1]} />
        <div id="circle-container">
          <Circle index={1} position={this.state.position}/>
          <Circle index={2} position={this.state.position}/>
          <Circle index={3} position={this.state.position}/>
        </div>
      </div>
    )
  }
}

export default Carousel
