import React from 'react'
import ActionButton from './ActionButton.js'

import './styles/NewsletterSignUp.css'

const NewsletterSignUp = () => (
  <div id="newsletter-sign-up">
    <h2>Join our newsletter</h2>
    <input type="text" placeholder="useremail420@mail.com"/>
    <ActionButton
      text="submit"
      color="black"
      location="newsletter"
    />
  </div>
)

export default NewsletterSignUp
