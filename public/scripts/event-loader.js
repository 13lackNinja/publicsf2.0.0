// EVENT LOADER
// Populate event module template with event data
// and add page jump to the nav links on the left.

function loadEvents() {
  xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200 ) {

      const allEvents = JSON.parse(this.responseText);

      // Loop through each event and populate event module and nav
      allEvents.forEach((e) => {

        // Define variables
        const eventContext = e;
        const eventHTML = eventTemplate(eventContext);

        // Insert template content
        document.getElementById('event-list').innerHTML += eventHTML;

        // Create Eventbrite Widget
        var exampleCallback = function() {
            console.log('Order complete!');
        };
        requestAnimationFrame(() => {
          window.EBWidgets.createWidget({
              widgetType: 'checkout',
              eventId: e.eventbriteID.toString(),
              modal: true,
              modalTriggerElementId: e.eventbriteID.toString(),
              onOrderComplete: exampleCallback
          });
        });
      });
    }
  }
  xhttp.open('GET', '/publicsf/events/manage/allevents', true);
  xhttp.send();
}

document.addEventListener('DOMContentLoaded', loadEvents);
