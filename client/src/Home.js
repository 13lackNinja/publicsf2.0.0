import React, { Component } from 'react'
import Carousel from './Carousel'
import Marquee from './Marquee'
import FeaturedEvents from './FeaturedEvents'
import NewsletterSignUp from './NewsletterSignUp'
import Grit from './Grit'
import TypeLogo from './TypeLogo'
import eventRequest from './eventRequest'

import './styles/Home.css'

import manholeImage from './images/pw_manhole.png'
import pwhomeImage from './images/pwhome.jpg'
import scan22 from './images/scan22.jpg'
import scan20 from './images/scan20.jpg'

const AboutStatement = () => (
  <div id="about-statement">
    <TypeLogo type="about" />
    <p>
      Located in the heart of San Francisco's Mission District, Public Works is a community-minded nightclub and event space dedicated to "Giving the People What They Want." With a Funktion One sound system and a clean, utilitarian aesthetic, Public Works is a blank canvas of creativity that welcomes international DJs, underground artists, rising talent, and the myriad arts and music communities that call San Francisco Home.
    </p>
    <img src={manholeImage} alt="pw_manhole.png"/>
  </div>
)

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstEventText: null,
      featuredEvents: null
    }
  }

  componentDidMount() {
    fetch(eventRequest.base, eventRequest.headers)
      .then(res => res.json())
      .then((resJSON) => {
        this.setState({
          firstEventText: resJSON.events[0].name.text,
          featuredEvents: resJSON.events.slice(0, 3)
        });
      }).catch((err) => console.log(err.message));
  }

  render() {
    return (
      <div id="home">
        <Carousel
          images={[
            scan22,
            scan20,
            pwhomeImage
          ]}
        />
        <AboutStatement />
        <Marquee text={`Just Announced: ${this.state.firstEventText}`}/>
        <FeaturedEvents events={this.state.featuredEvents}/>
        <NewsletterSignUp />
        <Grit />
      </div>
    )
  }
}

export default Home
