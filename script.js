const upperSidescroller = document.querySelector(".upper");
const middleSidescroller = document.querySelector(".middle");
const lowerSidescroller = document.querySelector(".lower");

const activateUpperSidescroller = () => {
  upperSidescroller.classList.add("active-sidescroller");
  middleSidescroller.classList.remove("active-sidescroller");
  lowerSidescroller.classList.remove("active-sidescroller");
};

const activateMiddleSidescroller = () => {
  upperSidescroller.classList.remove("active-sidescroller");
  middleSidescroller.classList.add("active-sidescroller");
  lowerSidescroller.classList.remove("active-sidescroller");
};

const activateLowerSidescroller = () => {
  upperSidescroller.classList.remove("active-sidescroller");
  middleSidescroller.classList.remove("active-sidescroller");
  lowerSidescroller.classList.add("active-sidescroller");
};
