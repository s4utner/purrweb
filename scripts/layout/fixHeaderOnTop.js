const header = document.querySelector(".top-bar");
const headerPosition = header.offsetTop;

const handleHeaderOnTop = () => {
  if (window.pageYOffset > headerPosition) {
    header.classList.add("top-bar_fixed");
  } else {
    header.classList.remove("top-bar_fixed");
  }
};

window.addEventListener("scroll", () => {
  handleHeaderOnTop();
});

handleHeaderOnTop();
