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
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
      <ActionButton text="submit" color="white"></ActionButton>
    </form>
  </React.Fragment>
)


const PrivateEvents = () => (
  <React.Fragment>
    <Dropdown selected='Private Events'/>
    <form action="">
      <input type="text"/>
      <ActionButton text="submit" color="white"></ActionButton>
    </form>
  </React.Fragment>
)

const Booking = () => (
  <React.Fragment>
    <Dropdown selected='Booking'/>
    <form action="">
      <input type="text"/>
      <ActionButton text="submit" color="white"></ActionButton>
    </form>
  </React.Fragment>
)

const LostAndFound = () => (
  <form action="">
    <input type="text"/>
    <ActionButton text="submit" color="white"></ActionButton>
  </form>
)


// Dropdown Menu

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.expand = this.expand.bind(this);
    this.state = {
      isOpen: false,
      selected: 'General'
    }
  }

  expand() {
    this.setState({ isOpen: true });
  }

  contract() {
    this.setState({
      isOpen: false,

    })
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
      <Route path="/connect" component={General}></Route>
      <Route path="/connect/general" component={General}></Route>
      <Route path="/connect/privateevents" component={PrivateEvents}></Route>
      <Route path="/connect/booking" component={Booking}></Route>
      <Route path="/connect/lostandfound" component={LostAndFound}></Route>
    </Switch>
  </div>
)

export default ContactForm
