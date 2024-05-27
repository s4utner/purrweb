const slides = document.querySelectorAll(".slider__image");
const sliderContainer = document.querySelector(".slides");
const totalSlides = slides.length;

let currentSlide = 0;
let isAnimating = false;
const breadcrumbsArray = [];

const showSlide = (index) => {
  if (isAnimating) return;
  isAnimating = true;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const startShift = -currentSlide * 100;
  let currentShift =
    parseFloat(
      sliderContainer.style.transform
        .replace("translateX(", "")
        .replace("%)", "")
    ) || 0;
  const shiftStep = (startShift - currentShift) / 50;

  let stepCount = 0;
  const intervalId = setInterval(() => {
    currentShift += shiftStep;
    stepCount += 1;
    sliderContainer.style.transform = `translateX(${currentShift}%)`;

    if (stepCount >= 50) {
      clearInterval(intervalId);
      sliderContainer.style.transform = `translateX(${startShift}%)`;
      isAnimating = false;
    }
  }, 10);
};

const renderBreadcrumbs = () => {
  const breadcrumbsContainer = document.querySelector(".breadcrumbs");
  slides.forEach((slide) => {
    breadcrumbsArray.push(slide);
  });

  const breadcrumbsHTML = breadcrumbsArray
    .map((breadcrumb, index) => {
      return `<li class="breadcrumb" data-index="${index}"></li>`;
    })
    .join("");

  breadcrumbsContainer.innerHTML = breadcrumbsHTML;
};

renderBreadcrumbs();

const breadcrumbs = document.querySelectorAll(".breadcrumb");

const showActiveBreadcrumb = () => {
  breadcrumbs.forEach((breadcrumb) => {
    breadcrumb.classList.remove("breadcrumb_active");

    if (Number(breadcrumb.dataset.index) === currentSlide) {
      breadcrumb.classList.add("breadcrumb_active");
    }
  });
};

const showChoosenSlide = () => {
  breadcrumbs.forEach((breadcrumb, index) => {
    breadcrumb.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
      showActiveBreadcrumb();
    });
  });
};

const showNextSlide = () => {
  if (!isAnimating) {
    showSlide(currentSlide + 1);
    showActiveBreadcrumb();
  }
};

const showPrevSlide = () => {
  if (!isAnimating) {
    showSlide(currentSlide - 1);
    showActiveBreadcrumb();
  }
};

showChoosenSlide();
showActiveBreadcrumb();
showSlide(currentSlide);
