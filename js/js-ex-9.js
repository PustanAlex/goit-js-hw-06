function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const bodyElement = document.body;
  const widget = document.querySelector(".widget");
  const colorButton = document.querySelector(".change-color");

  widget.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    bodyElement.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
  });