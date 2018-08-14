import React, { Component } from 'react'
import EventModule from './EventModule'
import eventURL from './eventURL'

import './styles/EventList.css'

class EventList extends Component {
  constructor(props) {
    super(props);
    this.loadMoreEvents = this.loadMoreEvents.bind(this);
    this.state = {
      displayedEvents: [],
      continuationKey: null
    }
  }

  componentDidMount() {
    fetch(eventURL.base, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_EVENTBRITE_API_KEY}`
      }
      })
      .then(res => res.json())
      .then((resJSON) => {
        if (resJSON.pagination.has_more_items) {
          let continuationKey = resJSON.pagination.continuation;
          this.setState({
            continuationKey: continuationKey
          });
        }
        let events = this.collectEvents(resJSON);
        this.displayEvents(events);
      }).catch((err) => console.log(err.message));
  }

  collectEvents(resJSON) {
    let events = resJSON.events.map((e, i) => {
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

  displayEvents(events) {
    let currentlyDisplayed = this.state.displayedEvents;
    this.setState({
      displayedEvents: currentlyDisplayed.concat(events)
    });
  }

  loadMoreEvents(continuationKey) {
    fetch(eventURL.base + `/?continuation=${this.state.continuationKey}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_EVENTBRITE_API_KEY}`
      }
      })
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
    return(
      <div id="event-list">
        {this.state.displayedEvents}
        {this.state.continuationKey &&
          <button
            className="button-underline"
            id="load-moar-events"
            onClick={this.loadMoreEvents}
          >
            Load Moar Events
          </button>
        }
      </div>
    )
  }
}

export default EventList
