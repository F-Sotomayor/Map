// Open and close modal
const closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", (e) => {
  document.getElementById("howtoModal").style.display = "none";
});

const openModal = document.getElementById("openModal");
openModal.addEventListener("click", () => {
  document.getElementById("howtoModal").style.display = "flex";
});

console.log(openModal);
