import api from "./api";
import { add } from "./marker";

let user;
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 17,
  center: {
    lat: -34.7010524,
    lng: -58.2842028,
  },
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ],
});
// Grabbing checkbox values
const ifSecurity = document.getElementById("ifSecurity");
// Grabbing poppable menu

const popMenu = document.getElementById("popMenu");
const closeMenu = document.getElementById("closeMenu");
const submitBtn = document.getElementById("submitBtn");
const noteInput = document.getElementById("textarea");
const typeReport = document.getElementById("categoryType");

api.auth.onChange((_user) => {
  if (!_user) {
    window.location.href = "./index.html";
  } else {
    user = _user;
  }
});

document.getElementById("logout").addEventListener("click", () => {
  api.auth.signOut();
});

api.registries.list().then((registries) => {
  registries.forEach((registry) => {
    add({
      map,
      category: registry.category,
      location: new google.maps.LatLng(
        registry.position.lat,
        registry.position.lng
      ),
      createdAt: registry.createdAt,
      note: registry.note,
      creator: registry.creator,
    });
  });
});

google.maps.event.addListener(map, "click", function (event) {
  // Opens the modal
  popMenu.style.display = "flex";
  noteInput.value = null;
  // Adds marker and closes modal
  submitBtn.addEventListener("click", function () {
    const registry = {
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      category: typeReport.value,
      createdAt: new Date().toLocaleDateString(),
      note: noteInput.value,
      creator: user.email,
    };

    add({
      map,
      location: event.latLng,
      category: registry.category,
      createdAt: registry.createdAt,
      note: registry.note,
      creator: registry.creator,
    });

    popMenu.style.display = "none";
    event.latLng = null;
    event.map = null;

    api.registries.add(registry);
  });
  // Closes modal and resets markers value
  closeMenu.addEventListener("click", function () {
    event.latLng = null;
    event.map = null;
    popMenu.style.display = "none";
  });
});

export default map;
