const btnCreate = document.querySelector('[data-action="render"]');
const btnDelete = document.querySelector('[data-action="destroy"]');
const typeInput = document.querySelector('input');
const getBoxes = document.querySelector('#boxes');

function createBoxes() {
  const amount = typeInput.value;
  const items = [];
  for (let i = 1; i <= amount; i += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.backgroundColor = randomColor();
    createDiv.style.width = i * 10 + 20 + 'px';
    createDiv.style.height = i * 10 + 20 + 'px';
    items.push(createDiv);
  }
  getBoxes.append(...items);
  console.log(getBoxes);
}

const destroyBoxes = () => {
  getBoxes.remove();
};

btnCreate.addEventListener('click', createBoxes);
btnDelete.addEventListener('click', destroyBoxes);

function randomColor() {
  const color =
    'rgb(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ')';
  return color;
}
