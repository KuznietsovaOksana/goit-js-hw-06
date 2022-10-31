function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const container = document.querySelector('#boxes');
const input = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  amount = input.value;

  const array = [];

  for (let i = 1; i <= amount; i += 1) {
    let el = document.createElement('div');

    el.style.width = `${30 + 10 * i}px`;
    el.style.height = `${30 + 10 * i}px`;
    el.style.backgroundColor = getRandomHexColor();

    array.push(el);
  }

  container.append(...array);
  input.value = '';
}

function destroyBoxes() {
  container.innerHTML = '';
  input.value = '';
}

buttonCreate.addEventListener('click', createBoxes);

buttonDestroy.addEventListener('click', destroyBoxes);
