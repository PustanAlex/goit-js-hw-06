const fontSize = document.querySelector("#font-size-control");
const span = document.querySelector("#text");


fontSize.addEventListener('input', () => {
    const fontSizeValue = fontSize.value;
    span.style.fontSize = `${fontSizeValue}px`;
});