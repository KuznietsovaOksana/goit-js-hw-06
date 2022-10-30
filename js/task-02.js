const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');
const listEl = ingredients.map(item => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = item;
  return listItem;
});

list.append(...listEl);
