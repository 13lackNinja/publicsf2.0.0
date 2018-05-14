
// Handlebars Templates
const eventAddTemplateSource = document.getElementById('add-event-template').innerHTML;
const eventAddTemplate = Handlebars.compile(eventAddTemplateSource);


function displayAddEventModule() {
  const eventListDiv = document.getElementById('event-list');
  const addEventModuleContainer = document.getElementById('add-event-module-container');
  const addEventForm = document.querySelector('.add-event-form');
  eventListDiv.style.transform = 'translateY(364px)';
  setTimeout(() => {
    addEventModuleContainer.innerHTML += eventAddTemplate();
  }, 1000);
}


function addEvent(event) {
  // collect form Data
  event.preventDefault();

  const form = document.getElementById('add-event-form');
  const formData = new FormData(form);

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log('event added');
    }
  }
  xhttp.open('POST', '/publicsf/events/manage/add')
  xhttp.send(formData);
}
