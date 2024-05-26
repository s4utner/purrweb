const cookiesModal = document.querySelector(".cookies-modal");
const cookiesModalButtons = document.querySelectorAll(".cookies-modal__button");

for (const cookiesModalButton of cookiesModalButtons) {
  cookiesModalButton.addEventListener("click", () =>
    cookiesModal.classList.add("hide-element")
  );
}
