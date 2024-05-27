document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slider__image");
  const totalSlides = slides.length;

  const firstSlideClone = slides[0].cloneNode();
  const lastSlideClone = slides[slides.length - 1].cloneNode();

  sliderContainer.appendChild(firstSlideClone);
  sliderContainer.insertBefore(lastSlideClone, slides[0]);

  let currentSlide = 1;
  let isAnimating = false;
  const breadcrumbsArray = [];

  sliderContainer.style.transform = "translateX(-100%)";

  const showSlide = (index) => {
    if (isAnimating) return;
    isAnimating = true;

    currentSlide = index;
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

        if (currentSlide === 0) {
          currentSlide = totalSlides;
          sliderContainer.style.transform = `translateX(-${
            currentSlide * 100
          }%)`;
        } else if (currentSlide === totalSlides + 1) {
          currentSlide = 1;
          sliderContainer.style.transform = `translateX(-${
            currentSlide * 100
          }%)`;
        }
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
    breadcrumbs.forEach((breadcrumb, index) => {
      breadcrumb.classList.remove("breadcrumb_active");

      if (
        (currentSlide === 1 || currentSlide === totalSlides + 1) &&
        index === 0
      ) {
        breadcrumb.classList.add("breadcrumb_active");
      } else if (
        (currentSlide === totalSlides || currentSlide === 0) &&
        index === breadcrumbs.length - 1
      ) {
        breadcrumb.classList.add("breadcrumb_active");
      } else if (currentSlide - 1 === index) {
        breadcrumb.classList.add("breadcrumb_active");
      }
    });
  };

  const showChoosenSlide = () => {
    breadcrumbs.forEach((breadcrumb, index) => {
      breadcrumb.addEventListener("click", () => {
        if (index === 0) {
          currentSlide = 1;
        } else if (index === breadcrumbs.length - 1) {
          currentSlide = totalSlides;
        } else {
          currentSlide = index + 1;
        }

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

  document
    .querySelector(".button_prev")
    .addEventListener("click", showPrevSlide);
  document
    .querySelector(".button_next")
    .addEventListener("click", showNextSlide);
});
