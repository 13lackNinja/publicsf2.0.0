import React from 'react'
import HeroImage from './HeroImage.js'
import FAQ from './FAQ.js'
import ContactForm from './ContactForm.js'
import Grit from './Grit.js'

import './styles/Connect.css'

import blueboltImage from './images/blue_bolt_dark.jpg'

class NewsletterText extends React.Component {
  componentDidMount() {
    const form = document.getElementById('newsletter-form');
    form.addEventListener('submit', formHandler, false);

    function formHandler(e) {
      e.preventDefault();
      return false;
    }
  }

  render() {
    return(
      <div id="newsletter-text">
        <h1>Join the ranks</h1>
        <p>
          Newsletter subscribers are a valued community of true PW fans.
        </p>
        <p>
            We send only the best kinds of perks, including free tickets, first pass at some of the hottest shows in town, and clues to mysterious puzzles which unlock further delights!
        </p>
        <form
          name="newsletter-form"
          id="newsletter-form"
          action="https://www.ticketfly.com/account/emailSignup?orgId=1499"
          method="post">
          <input type="text" placeholder="enter email here"/>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

const Connect = () => (
  <div id="connect">
    <HeroImage text="Connect" image={blueboltImage} />
    <NewsletterText />
    <div id="map"></div>
    <FAQ />
    <ContactForm
      initialSelection='General'
      initialFormType='general'
    />
    <Grit />
  </div>
)


export default Connect
