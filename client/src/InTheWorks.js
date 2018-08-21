import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import EventModule from './EventModule'
import EventPage from './EventPage'
import eventRequest from './eventRequest'
import Carousel from './Carousel'
import EventList from './EventList'
import NewsletterSignUp from './NewsletterSignUp'
import Grit from './Grit'

import './styles/InTheWorks.css'

import eightYearImage from './images/8yr.jpg'
import event1Image from './images/event1.jpg'
import event2Image from './images/event2.jpg'

const AllEvents = (props) => (
  <React.Fragment>
    <Carousel
      images={[
        event2Image,
        eightYearImage,
        event1Image
      ]}
    />
    {/* <Marquee text="In the Works"/> */}
    <EventList events={props.events}/>
    <NewsletterSignUp />
    <Grit />
  </React.Fragment>
)

class InTheWorks extends Component {
  constructor(props) {
    super(props);
    this.loadMoreEvents = this.loadMoreEvents.bind(this);
    this.state = {
      eventData: [],
      displayedEvents: [],
      constinuationKey: null
    }
  }

  componentDidMount() {
    fetch(eventRequest.base, eventRequest.headers)
      .then(res => res.json())
      .then((resJSON) => {
        let continuationKey = null;
        if (resJSON.pagination.has_more_items) {
          continuationKey = resJSON.pagination.continuation;
        }
        let eventData = resJSON.events;
        let eventMarkup = this.collectEvents(resJSON);
        this.displayEvents(eventMarkup, eventData, continuationKey);
      }).catch(err => console.log(err.message));
  }

  collectEvents(resJSON) {
    let events = resJSON.events.map((e) => {
      return (
        <EventModule
          key={e.id}
          id={e.id}
          name={e.name.text}
          date={
            new Date(e.start.local).toDateString()
          }
          image={e.logo.original.url}
        />
      );
    });
    return events
  }

  displayEvents(eventMarkup, eventData, continuationKey) {
    let currentlyDisplayed = this.state.displayedEvents;
    this.setState({
      eventData: eventData,
      displayedEvents: currentlyDisplayed.concat(eventMarkup),
      continuationKey: continuationKey
    });
  }

  loadMoreEvents(continuationKey) {
    fetch(eventRequest.base + `/?continuation=${this.state.continuationKey}`, eventRequest.headers)
      .then(res => res.json())
      .then((resJSON) => {
        if (resJSON.pagination.has_more_items) {
          this.setState({
            continuationKey: resJSON.pagination.continuation
          })
        } else {
          this.setState({
            continuationKey: null
          })
        }
        let events = this.collectEvents(resJSON);
        this.displayEvents(events);
      }).catch(err => console.log(err.message));
  }

  render() {
    return (
      <div id="in-the-works">
        <Switch>
          <Route exact path='/intheworks' render={
            () => (
              <AllEvents events={this.state.displayedEvents}/>
            )
          }/>
          <Route path='/intheworks/:eventId' render={
            ({ match }) => {
              const events = this.state.eventData;
              const event = events.find((event) => {
                return event.id === match.params.eventId;
              });

              if (event) {
                return (
                  <EventPage
                    loaded={true}
                    id={match.params.eventId}
                    name={event.name.text}
                    date={
                      new Date(event.start.local).toDateString()}
                    image={event.logo.original.url}
                    description={event.description.text}
                  />
                )
              }

              return (
                <EventPage
                  loaded={false}
                  id={match.params.eventId}
                />
              )
            }
          }/>
        </Switch>
      </div>
    )
  }
}

export default InTheWorks
