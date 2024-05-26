const header = document.querySelector(".header__navigation");
const headerPosition = header.offsetTop;

const handleHeaderOnTop = () => {
  if (window.pageYOffset > headerPosition) {
    header.classList.add("header__navigation--fixed");
  } else {
    header.classList.remove("header__navigation--fixed");
  }
};

window.addEventListener("scroll", () => {
  handleHeaderOnTop();
});

handleHeaderOnTop();
