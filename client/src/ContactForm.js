import React, {Component} from 'react'
import ActionButton from './ActionButton.js'

import './styles/ContactForm.css'

import downArrow from './images/down_arrow.svg'

class ContactForm extends Component {
  render() {
    return(
      <div id="contact-form-container">
        <form id="contact-form" action="">
          <h2>Subject:</h2>
          <div id="subject-dropdown">
            <p>Booking/Special Events</p>
            <img src={downArrow} alt="down_arrow.svg" className="dropdown-arrow" id="poc-dropdown-arrow" />
          </div>
          <h2>Email</h2>
          <input type="text" id="email-input" />
          <h2>Message:</h2>
          <textarea id="message-box"></textarea>
          <ActionButton text="submit" color="white"/>
        </form>
      </div>
    )
  }
}

export default ContactForm
