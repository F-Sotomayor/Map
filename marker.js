import map from "./map"

const infoWindow = new google.maps.InfoWindow();

// Adds a marker to the map.
export function add({location, map, category, createdAt, note, creator}) {
  // Add the marker at the clicked location
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: `/markers/${category}.png`
  })

  marker.addListener('click', function (event) {
    infoWindow.setContent(`Tipo:${category}<br>
    Fecha: ${createdAt}<br>
    Nota: ${note}<br>
    Creador: ${creator}`)
    infoWindow.open(map, marker);
  })
}