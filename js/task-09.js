function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const textColor = document.querySelector('.color');

button.addEventListener('click', onColorChange);

function onColorChange(event) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  textColor.textContent = color;
}
