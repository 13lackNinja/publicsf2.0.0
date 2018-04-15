
function initMap() {
  var publicworks = {lat: 37.768, lng: -122.419};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: publicworks,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });
  var marker = new google.maps.Marker({
    position: publicworks,
    map: map
  });
}
