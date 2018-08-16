// Eventbrite API Script
// Populates the page with Eventbrite data

async function getEvents() {
  const responseObject = await fetch('https://www.eventbriteapi.com/v3/users/120489291103/owned_events/?token=')
    .then((response) => {
      return response.json();
    });

  const events = responseObject.events;

  events.forEach((event) => {

    // First converting date data into readable string
    const dateData = event.start.local = new Date();
    event.start.local = dateData.toDateString();

    // Building the event module from template
    const eventHTML = eventTemplate(event);
    const eventList = document.getElementById('event-list');

    // And inserting into DOM
    eventList.innerHTML += eventHTML;

    // Load eventbrite checkout widget
    var exampleCallback = function() {
        console.log('Order complete!');
    };
    requestAnimationFrame(() => {
      window.EBWidgets.createWidget({
          widgetType: 'checkout',
          eventId: event.id,
          modal: true,
          modalTriggerElementId: event.id,
          onOrderComplete: exampleCallback
      });
    });
  });
}

window.addEventListener('DOMContentLoaded', getEvents);
