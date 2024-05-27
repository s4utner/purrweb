const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".button_prev");
const nextButton = document.querySelector(".button_next");
const slides = document.querySelectorAll(".slider__image");
const breadcrumbsContainer = document.querySelector(".slider-breadcrumbs");
const slideCount = slides.length;
const breadcrumbs = [];
let slideIndex = 0;

const updateSlider = () => {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
};

const renderBreadcrumbs = () => {
  slides.forEach((slide) => {
    breadcrumbs.push(slide);
  });

  const breadcrumbsHTML = breadcrumbs
    .map((breadcrumb, index) => {
      return `<li class="breadcrumb" data-index="${index}"></li>`;
    })
    .join("");

  breadcrumbsContainer.innerHTML = breadcrumbsHTML;
};

updateSlider();
renderBreadcrumbs();

const breadcrumbsHTML = document.querySelectorAll(".breadcrumb");

const showChoosenSlide = () => {
  breadcrumbsHTML.forEach((breadcrumb, index) => {
    breadcrumb.addEventListener("click", () => {
      breadcrumb.classList.add("breadcrumb-active");
      slideIndex = index;
      updateSlider();
      showActiveBreadcrumb();
    });
  });
};

showChoosenSlide();

const showPrevSlide = () => {
  if (slideIndex - 1 >= 0) {
    slideIndex = slideIndex - 1;
  } else {
    slideIndex = slideCount - 1;
  }

  updateSlider();
  showActiveBreadcrumb();
};

const showNextSlide = () => {
  if (slideIndex + 1 < slideCount) {
    slideIndex = slideIndex + 1;
  } else {
    slideIndex = 0;
  }

  updateSlider();
  showActiveBreadcrumb();
};

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

const showActiveBreadcrumb = () => {
  breadcrumbsHTML.forEach((breadcrumb) => {
    const breadcrumbIndex = Number(breadcrumb.dataset.index);

    if (breadcrumbIndex === slideIndex) {
      breadcrumb.classList.add("breadcrumb-active");
    } else {
      breadcrumb.classList.remove("breadcrumb-active");
    }
  });
};

showActiveBreadcrumb();
