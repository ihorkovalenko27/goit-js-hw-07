const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newLi = ingredients.map(ingredient => {
  const madeLi = document.createElement('li');
  madeLi.innerText = ingredient;
  return madeLi;
});

const listIngredients = document.querySelector('#ingredients');

listIngredients.append(...newLi);

console.log(listIngredients);
