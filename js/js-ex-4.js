let counterValue = 0;
const spanContent = document.getElementById("value");
const increaseButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

increaseButton.addEventListener('click', () => {
    counterValue += 1;
    spanContent.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    spanContent.textContent = counterValue;
});