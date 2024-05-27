const burgerIcon = document.querySelector(".top-bar__burger");
const burgerMenu = document.querySelector(".burger-menu");
const closeBurgerMenuIcon = document.querySelector(".burger-menu__icon");

const openBurgerMenu = () => {
  burgerIcon.addEventListener("click", () => {
    burgerMenu.classList.remove("hide-element");
  });
};

const closeBurgerMenu = () => {
  closeBurgerMenuIcon.addEventListener("click", () => {
    burgerMenu.classList.add("hide-element");
  });
};

openBurgerMenu();
closeBurgerMenu();
