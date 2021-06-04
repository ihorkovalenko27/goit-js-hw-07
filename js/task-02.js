const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listIngredients = document.querySelector('#ingredients');

const newLi = ingredients.map(ingredient => {
  const madeLi = document.createElement('li');
  madeLi.innerText = ingredient;
  return madeLi;
});

listIngredients.style.listStyleType = 'none';

listIngredients.append(...newLi);

console.log(listIngredients);
