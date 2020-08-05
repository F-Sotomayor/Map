import api from "./api";

document.getElementById("logout2").addEventListener("click", () => {
  api.auth.signOut();
  window.location.href = "./index.html";
});
