const inputValidationEl = document.querySelector('#validation-input');
const inputValidationLength = document.querySelector('[data-length]');

const checkLength = event => {
    const inputLength = event.currentTarget.value.length;
    const inputValidationLength = Number(event.currentTarget.dataset.length);

    if (inputLength === inputValidationLength) {
        inputValidationEl.classList.add("valid");
        inputValidationEl.classList.remove("invalid");
    } else {

        inputValidationEl.classList.add("invalid");
        inputValidationEl.classList.remove("valid");
    };
};

inputValidationEl.addEventListener("blur", checkLength);