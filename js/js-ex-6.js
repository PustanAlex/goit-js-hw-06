const validationInput = document.getElementById("validation-input");


validationInput.addEventListener("blur", () => {
    const minLength = validationInput.getAttribute("data-min-length");
    const maxLength = validationInput.getAttribute("data-max-length")
    const enteredLength = validationInput.value.length;

    if (enteredLength >= minLength && enteredLength <= maxLength) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
    else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
});