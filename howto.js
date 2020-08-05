// Open and close modal
const closeModal = document.getElementById("closeModal");
closeModal.addListener("click", (e) => {
  document.getElementById("howtoModal").style.display = "none";
});

const openModal = document.getElementById("openModal");
openModal.addListener("click", () => {
  document.getElementById("howtoModal").style.display = "flex";
});
