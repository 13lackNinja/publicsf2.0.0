
// Handlebars Templates:
const eventEditTemplateSource = document.getElementById('event-edit-template').innerHTML;
const eventEditTemplate = Handlebars.compile(eventEditTemplateSource);
const eventContentsTemplateSource = document.getElementById('event-contents-template').innerHTML;
const eventContentsTemplate = Handlebars.compile(eventContentsTemplateSource);

// Define the edit event function
function editEvent(event) {


  // Get the target event module
  const eventModule = event.target.parentNode;

  // Define current event data into an object
  const eventbriteID = eventModule.getElementsByClassName('purchase')[0].id;
  const eventArtist = eventModule.getElementsByClassName('event-artist')[0].innerText;
  const eventDate = eventModule.getElementsByClassName('event-date')[0].innerText;
  const eventPrice = eventModule.getElementsByClassName('event-price')[0].innerText;
  const eventRoom = eventModule.getElementsByClassName('event-room')[0].innerText;
  const eventImage = eventModule.getElementsByClassName('event-image')[0].style.cssText;

  const eventContext = {
    eventbriteID: eventbriteID,
    artists: eventArtist,
    date: eventDate,
    price: eventPrice,
    room: eventRoom,
    image: eventImage
  }

  // Replace the event data with an update form
  eventModule.innerHTML = eventEditTemplate(eventContext);
  eventModule.className = 'event-edit-module';
}

// Define the update event function
function updateEvent() {

  // Get the target form and event module and eventbriteID
  const form = event.target.parentNode;
  const eventModule = event.target.parentNode.parentNode;
  const eventbriteID = event.target.id;

  // Data from the edit form
  const formData = new FormData(form);
  formData.append('eventbriteID', eventbriteID);

  // AJAX Request
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      const updatedEvent = JSON.parse(this.responseText);
      const newEventModuleContents = eventContentsTemplate(updatedEvent);
      eventModule.className = 'event-module';
      eventModule.innerHTML = newEventModuleContents;
    }

  }

  xhttp.open('POST', '/publicsf/events/manage/update');
  xhttp.send(formData);
}
