const burgerIcon = document.querySelector(".header__navigation-burger");
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
