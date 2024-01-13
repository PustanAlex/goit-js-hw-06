const form = document.querySelector(".login-form");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = e.target.elements.email;
    const passwordInput = e.target.elements.password;

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (emailValue === "" || passwordValue === "") {
        alert("Toate câmpurile trebuie completate.");
    } else {
        const formData = {
            email: emailValue,
            password: passwordValue
        };

        console.log(formData);

        e.target.reset();
    }
});