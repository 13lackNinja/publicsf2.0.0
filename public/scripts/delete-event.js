// Deletes an event from the database

// 1. Get eventbriteID of button clicked
// 2. Issue a mongoose Model.deleteOne() command passing in the eventbriteID
// 3. Remove the module from the page

function deleteEvent(event) {
  const eventModule = event.target.parentNode;
  const eventbriteID = parseInt(eventModule.getElementsByClassName('purchase')[0].id);
  const query = { eventbriteID: eventbriteID };

  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', '/publicsf/events/manage/delete');
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify(query));
  console.log(JSON.stringify(query));
}
