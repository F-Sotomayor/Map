window.map = new google.maps.Map(
  document.getElementById('map'), {
    zoom: 17,
    center: {
      lat: -34.7010524,
      lng: -58.2842028
    },
    styles: [{
      featureType: "poi",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }]
  }
);