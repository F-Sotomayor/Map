import api from './api'

document.getElementById("login").addEventListener("click", () => {
    api.auth.signIn()
})

api.auth.onChange((user) => {
    if (user) {
        window.location.href = "./map.html"
    }
})