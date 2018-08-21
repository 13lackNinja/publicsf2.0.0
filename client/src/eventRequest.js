
const eventRequest = {
  base: 'https://www.eventbriteapi.com/v3/events/search/?organizer.id=8182660460&include_unavailable_events=false&sort_by=date',
  headers: {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_EVENTBRITE_API_KEY}`
    }
    }
}

export default eventRequest
