let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.609674, lng: -122.200126 },
    zoom: 12,
  });
}
