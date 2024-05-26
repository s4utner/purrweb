// Модальное окно
const contactModal = document.querySelector(".contact-modal__background");

// Кнопки, открывающие модально окно, и находящаяся в модальном окне
const modalContactButtons = document.querySelectorAll(".contact-button");
const modalContactButton = document.querySelector(".contact-modal__button");

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
const modalEscapeIcon = document.querySelector(".contact-modal__icon");

const sendDataOnButtonClick = () => {
  contactModal.classList.add("hide-element");
};

const handleButtonClickToSendData = () => {
  modalContactButton.addEventListener("click", sendDataOnButtonClick);
};

const errorOnButtonClick = () => {
  modalContactButton.removeEventListener("click", sendDataOnButtonClick);
  modalContactButton.addEventListener("click", () => {
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
        modalContactButton.classList.remove("button-disabled");
        handleButtonClickToSendData();
      } else {
        modalContactButton.classList.add("button-disabled");
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
  for (const button of modalContactButtons) {
    button.addEventListener("click", () => {
      modalContactButton.classList.add("button-disabled");
      button.classList.add("button-clicked");
      contactModal.classList.remove("hide-element");

      validateInputs();
    });
  }

  modalEscapeIcon.addEventListener("click", () =>
    contactModal.classList.add("hide-element")
  );
};

openContactModalOnButtonClick();
