// Google Map

function initMap() {
  const Vijayawada = { lat: 16.5062, lng: 80.6480}
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: Vijayawada,
  });

  const marker = new google.maps.Marker({
    position: Vijayawada,
    map: map,
  });
}
