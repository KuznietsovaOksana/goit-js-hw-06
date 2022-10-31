const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', onMoveChange);

function onMoveChange(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
