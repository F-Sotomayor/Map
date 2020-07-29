// Grabbing checkbox values
const ifSecurity = document.getElementById("ifSecurity")
// Grabbing poppable menu

const popMenu = document.getElementById("popMenu")
const closeMenu = document.getElementById("closeMenu")
const submitBtn = document.getElementById("submitBtn")
const noteInput = document.getElementById("textarea")
let typeReport = document.getElementById("categoryType")


google.maps.event.addListener(map, 'click', function (event) {
  // Opens the modal
  popMenu.style.display = "flex";
  noteInput.value = null
  // Adds marker and closes modal
  submitBtn.addEventListener("click", function () {
    addMarker(event.latLng, map);
    popMenu.style.display = "none"
    event.latLng = null;
    event.map = null;
  })
  // Closes modal and resets markers value
  closeMenu.addEventListener("click", function () {
    event.latLng = null;
    event.map = null;
    popMenu.style.display = "none"
  })
});

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true,
    icon: `/markers/${typeReport.value}.png`
  })
  // Adds info when clicking the marker 
  let infowindowContent = {
    category: `${typeReport.value}`,
    date: new Date(),
    note: `${noteInput.value}`,
    open: false
  }
  const infowindow = new google.maps.InfoWindow({
    content: `Tipo:${infowindowContent.category}<br>
      Fecha: ${infowindowContent.date}<br>
      Nota: ${infowindowContent.note}`
  });

  marker.addListener('click', function (event) {
    if (infowindowContent.open === false) {
      infowindow.open(map, marker);
      infowindowContent.open = true;
    } else {
      infowindow.close()
      infowindowContent.open = false
    }

  })

}