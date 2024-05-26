// Модальные окна
const contactModal = document.querySelector(".contact-modal__background");
const successModal = document.querySelector(".success-modal__background");
const burgerMenuModal = document.querySelector(".burger-menu");

// Кнопки, открывающие модально окно, и находящаяся в модальном окне
const contactModalButtons = document.querySelectorAll(".contact-button");
const contactModalButton = document.querySelector(".contact-modal__button");
const successModalButton = document.querySelector(".success-modal__button");

// Инпуты
const requiredValueInputs = document.querySelectorAll(".required-value");
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const telInput = document.querySelector(".tel-input");

// Ошибки инпутов
const nameInputError = document.querySelector(".name-error");
const emailInputError = document.querySelector(".email-error");
const telInputError = document.querySelector(".tel-error");
const errorMessage = document.querySelector(".contact-modal__text--requirment");

// Кнопка закрытия модального окна
const contactModalEscapeIcon = document.querySelector(".contact-modal__icon");
const successModalEscapeIcon = document.querySelector(
  ".success-modal__escape-icon"
);

const sendDataOnButtonClick = () => {
  contactModal.classList.add("hide-element");
  successModal.classList.remove("hide-element");
};

const handleButtonClickToSendData = () => {
  contactModalButton.addEventListener("click", sendDataOnButtonClick);
};

const errorOnButtonClick = () => {
  contactModalButton.removeEventListener("click", sendDataOnButtonClick);
  contactModalButton.addEventListener("click", () => {
    if (nameInput.value === "") {
      nameInput.classList.add("contact-modal__input--error");
      nameInputError.classList.remove("hide-element");
      errorMessage.classList.remove("hide-element");
    }

    if (emailInput.value === "") {
      emailInput.classList.add("contact-modal__input--error");
      emailInputError.classList.remove("hide-element");
      errorMessage.classList.remove("hide-element");
    }

    if (telInput.value === "") {
      telInput.classList.add("contact-modal__input--error");
      telInputError.classList.remove("hide-element");
      errorMessage.classList.remove("hide-element");
    }
  });
};

const validateInputs = () => {
  for (const input of requiredValueInputs) {
    input.addEventListener("input", () => {
      if (
        nameInput.value !== "" &&
        emailInput.value !== "" &&
        telInput.value !== ""
      ) {
        errorMessage.classList.add("hide-element");
        contactModalButton.classList.remove("button-disabled");
        handleButtonClickToSendData();
      } else {
        contactModalButton.classList.add("button-disabled");
      }

      if (nameInput.value !== "") {
        nameInputError.classList.add("hide-element");
        nameInput.classList.remove("contact-modal__input--error");
      }

      if (emailInput.value !== "") {
        emailInputError.classList.add("hide-element");
        emailInput.classList.remove("contact-modal__input--error");
      }

      if (telInput.value !== "") {
        telInputError.classList.add("hide-element");
        telInput.classList.remove("contact-modal__input--error");
      }

      if (
        nameInput.value === "" ||
        emailInput.value === "" ||
        telInput.value === ""
      ) {
        errorOnButtonClick();
      }
    });

    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      telInput.value === ""
    ) {
      errorOnButtonClick();
    }
  }
};

const openContactModalOnButtonClick = () => {
  for (const button of contactModalButtons) {
    button.addEventListener("click", () => {
      contactModalButton.classList.add("button-disabled");
      button.classList.add("button-clicked");
      contactModal.classList.remove("hide-element");
      burgerMenuModal.classList.add("hide-element");
      validateInputs();
    });
  }

  contactModalEscapeIcon.addEventListener("click", () =>
    contactModal.classList.add("hide-element")
  );
};

const closeSuccessModalOnButtonClick = () => {
  successModalButton.addEventListener("click", () => {
    successModal.classList.add("hide-element");
  });
  successModalEscapeIcon.addEventListener("click", () => {
    successModal.classList.add("hide-element");
  });
};

openContactModalOnButtonClick();
closeSuccessModalOnButtonClick();
