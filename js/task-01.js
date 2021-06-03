const countById = document.querySelector('#categories');
console.log('В списке', countById.children.length, 'категории');

const searchElement = document.querySelectorAll('.item');
searchElement.forEach(el =>
  console.log(
    'Категория:',
    el.firstElementChild.textContent,
    'Количество элементов:',
    el.lastElementChild.children.length,
  ),
);
