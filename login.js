import api from "./api";

document.getElementById("login").addEventListener("click", () => {
  api.auth.signIn();
});

api.auth.onChange((user) => {
  if (user.uid === "Lx2o9NfqY0fPUAjWKMliP6tYlDF2") {
    window.location.href = "./panel.html";
  } else if (user) {
    window.location.href = "./map.html";
  } else {
    window.location.href = "./index.html";
  }
});
