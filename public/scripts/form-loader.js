
function loadForm() {

  xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200 ) {

      const allEvents = JSON.parse(this.responseText);
      allEvents.forEach((e) => {
        const eventContext = e;
        document.getElementById('form-nav').innerHTML += '<h4 class="form-nav-item">' + e.title + '</h4>';
      });
    }
  }
  xhttp.open('GET', 'http://localhost:8080/allevents', true);
  xhttp.send();
}

loadForm();
