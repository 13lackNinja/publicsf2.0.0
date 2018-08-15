import React, {Component} from 'react'
import {Switch, Link, Route} from 'react-router-dom'
import ActionButton from './ActionButton.js'

import './styles/ContactForm.css'

import downArrow from './images/down_arrow.svg'


// Form Fields

const General = () => (
  <React.Fragment>
    <Dropdown selected='General'/>
    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text" id="name"/>
      <label htmlFor="email">Email</label>
      <input type="text" id="email"/>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
      <ActionButton text="submit" color="white"/>
    </form>
  </React.Fragment>
)


const PrivateEvents = () => (
  <React.Fragment>
    <Dropdown selected='Private Events'/>
    <form action="">
      <label htmlFor="event-type">What kind of event (breakouts?)</label>
      <input type="text" id="event-type"/>
      <label htmlFor="attendance">What is the approximate attendance?</label>
      <input type="text" id="attendance"/>
      <label htmlFor="beverages">Will you need beverages? Alcohol?</label>
      <input type="text" id="beverages"/>
      <label htmlFor="food">Will you need food? What kind?</label>
      <input type="text" id="food"/>
      <label htmlFor="audio-visual">Will you need A/V?</label>
      <input type="text" id="audio-visual"/>
      <label htmlFor="decorations">Will you need decorations?</label>
      <input type="text" id="decorations"/>
      <ActionButton text="submit" color="white"/>
    </form>
  </React.Fragment>
)

const Booking = () => (
  <React.Fragment>
    <Dropdown selected='Booking'/>
    <form action="">
      <label htmlFor="date">What is the ideal date for your event?</label>
      <input type="text" id="date"/>
      <label htmlFor="type">What type of event? Concert, dance, sit down, etc...</label>
      <input type="text" id="type"/>
      <label htmlFor="acts">Which musical acts are you planning to book?</label>
      <input type="text" id="acts"/>
      <label htmlFor="previous-shows">Previous shows in the area?</label>
      <input type="text" id="previous-shows"/>
      <ActionButton text="submit" color="white"/>
    </form>
  </React.Fragment>
)

const RollUpGallery = () => (
  <React.Fragment>
    <Dropdown selected='Roll Up Gallery'/>
    <form action="">
      <label htmlFor="message">Interested in our Roll Up Gallery? Let's talk.</label>
      <input type="text" id="message"/>
      <ActionButton text="submit" color="white"/>
    </form>
  </React.Fragment>
)

const LostAndFound = () => (
  <React.Fragment>
    <Dropdown selected='Lost And Found'/>
    <form action="">
      <label htmlFor="date-lost">What date and event was the item lost at?</label>
      <input type="text" id="date-lost"/>
      <label htmlFor="ticket-number">Claim ticket # if applicable</label>
      <input type="text" id="ticket-number"/>
      <label htmlFor="description">Detailed description of the item</label>
      <input type="text" id="description"/>
      <label htmlFor="contact-info">Contact info (email / phone number)</label>
      <input type="text" id="contact-info"/>
      <ActionButton text="submit" color="white"/>
    </form>
  </React.Fragment>
)


// Dropdown Menu

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.expand = this.expand.bind(this);
    this.contract = this.contract.bind(this);
    this.state = {
      isOpen: false,
    }
  }

  expand() {
    this.setState({ isOpen: true });
  }

  contract(e) {
    this.setState({ isOpen: false });
  }

  render() {
    if (!this.state.isOpen) {
      return (
        <div id="dropdown">
          <button onClick={this.expand}>{this.props.selected}</button>
          <img src={downArrow} alt="down_arrow.svg"/>
        </div>
      )
    } else {
      return (
        <div id="dropdown">
          <Link to='/connect/general' text="General" onClick={this.contract}>
            General
          </Link>
          <Link to='/connect/privateevents' onClick={this.contract}>
            Private Events
          </Link>
          <Link to='/connect/rollupgallery' onClick={this.contract}>
            Roll Up Gallery
          </Link>
          <Link to='/connect/booking' onClick={this.contract}>
            Booking
          </Link>
          <Link to='/connect/lostandfound' onClick={this.contract}>
            Lost and Found
          </Link>
        </div>
      )
    }
  }
}


// Contact Form

const ContactForm = () => (
  <div id="contact-form-container">
    <h1>Subject:</h1>
    <Switch>
      <Route exact path="/connect" component={General}></Route>
      <Route path="/connect/general" component={General}></Route>
      <Route path="/connect/privateevents" component={PrivateEvents}></Route>
      <Route path="/connect/rollupgallery" component={RollUpGallery}></Route>
      <Route path="/connect/booking" component={Booking}></Route>
      <Route path="/connect/lostandfound" component={LostAndFound}></Route>
    </Switch>
  </div>
)

export default ContactForm
