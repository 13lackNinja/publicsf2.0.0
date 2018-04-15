
function loadEvents() {

  xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200 ) {

      const allEvents = JSON.parse(this.responseText);
      allEvents.forEach((e) => {
        const eventContext = e;
        const eventTemplate = Handlebars.templates["events.hbs"];
        const eventHTML = eventTemplate(eventContext);
        document.getElementById('event-list').innerHTML += eventHTML;
        document.getElementById('event-nav').innerHTML += '<h4 class="event-nav-item">' + e.title + '</h4>';

        function loadButton() {
          var exampleCallback = function() {
              console.log('Order complete!');
          };
          window.EBWidgets.createWidget({
              widgetType: 'checkout',
              eventId: e.eventbriteID.toString(),
              modal: true,
              modalTriggerElementId: e.eventbriteID.toString(),
              onOrderComplete: exampleCallback
          });
        }

        loadButton(e);

      });
    }
  }
  xhttp.open('GET', 'http://localhost:8080/allevents', true);
  xhttp.send();
}

loadEvents();
