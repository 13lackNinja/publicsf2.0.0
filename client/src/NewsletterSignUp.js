import React from 'react'
import ActionButton from './ActionButton.js'

import './styles/NewsletterSignUp.css'

const NewsletterSignUp = () => (
  <div id="newsletter-sign-up">
    <h2>Join our newsletter</h2>
    <form action="https://www.ticketfly.com/account/emailSignup?orgId=1499">
      <input type="text" name="email" placeholder="useremail420@mail.com"/>
      <ActionButton
        text="submit"
        color="black"
        location="newsletter"
      />
    </form>
  </div>
)

export default NewsletterSignUp
