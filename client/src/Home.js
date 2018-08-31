import React, { Component } from 'react'
import { production, development } from './config/config.js'
import Carousel from './Carousel'
import Marquee from './Marquee'
import FeaturedEvents from './FeaturedEvents'
import NewsletterSignUp from './NewsletterSignUp'
import Grit from './Grit'
import TypeLogo from './TypeLogo'
import eventRequest from './eventRequest'

import './styles/Home.css'

import manholeImage from './images/pw_manhole_white.png'

const AboutStatement = () => (
  <div id="about-statement">
    <TypeLogo type="about" />
    <p>
      Located in the heart of San Francisco's Mission District, Public Works is a community-minded nightclub and event space dedicated to "Giving the People What They Want." With a Funktion One sound system and a clean, utilitarian aesthetic, Public Works is a blank canvas of creativity that welcomes international DJs, underground artists, rising talent, and the myriad arts and music communities that call San Francisco Home.
    </p>
    <img src={manholeImage} alt="pw_manhole_white.png"/>
  </div>
)

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstEventName: null,
      firstEventId: null,
      featuredEvents: null
    }
  }

  componentDidMount() {
    fetch(eventRequest.base, eventRequest.headers)
      .then(res => res.json())
      .then((resJSON) => {
        this.setState({
          firstEventName: resJSON.events[0].name.text,
          firstEventId: resJSON.events[0].id,
          featuredEvents: resJSON.events.slice(0, 3)
        });
      }).catch((err) => console.log(err.message));
  }

  render() {
    let images = null;

    if (process.env.NODE_ENV === 'development') {
      images = development.carouselImages;
    } else {
      images = production.carouselImages;
    }

    return (
      <div id="home">
        <Carousel
          images={images}
        />
        <Marquee
          text={`Just Announced: ${this.state.firstEventName}`}
          id={this.state.firstEventId}
        />
        <AboutStatement />
        <FeaturedEvents events={this.state.featuredEvents}/>
        <NewsletterSignUp />
        <Grit />
      </div>
    )
  }
}

export default Home
