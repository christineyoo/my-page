// Functionality for Google Map Feature

function initMap() {
  // Map options
  var options = {
    zoom: 10,
    center: { lat: 33.8883, lng: -118.3090 },
  };

  // New map
  var map = new google.maps.Map(document.getElementById("map"), options);

  // Array of markers
  var markers = [
    {
      coords: { lat: 33.8688, lng: -118.3831 },
      iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    }
  ];

  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    // Add marker
    showMarker(markers[i]);
  };

  // Add marker function
  function showMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });
  };
};