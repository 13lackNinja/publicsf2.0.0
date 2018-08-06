import React, { Component } from 'react'
import eventResponse from './eventResponse.js'

import './styles/Carousel.css'

const LastAnnounced = () => {
  const event = eventResponse.events[0];

  return (
    <div id="last-announced">
      <h2>Last Announced:</h2>
      <h3>{event.headlinersName}</h3>
      <h4>{event.promoterName}</h4>
      <p>{event.startDate.toString()}</p>
    </div>
  )
}

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
    this.images = props.images
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.rotate(), 16000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  rotate() {
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
    if (this.props.showLastAnnounced) {
      return (
        <div id="carousel-container">
          <Slide image={this.images[this.state.position - 1]} />
          <div id="circle-container">
            <Circle index={1} position={this.state.position}/>
            <Circle index={2} position={this.state.position}/>
            <Circle index={3} position={this.state.position}/>
          </div>
          <LastAnnounced />
        </div>
      )
    } else {
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
}

export default Carousel
