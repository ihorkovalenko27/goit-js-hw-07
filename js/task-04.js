const counterDisplay = document.querySelector('#value');
const counterMinus = document.querySelector('[data-action="decrement"]');
const counterPlus = document.querySelector('[data-action="increment"]');

let counterValue = 0;

counterPlus.addEventListener('click', () => {
  counterValue += 1;
  console.log('Добавляем монету');
  updateDisplay();
});

counterMinus.addEventListener('click', () => {
  counterValue -= 1;
  console.log('Отнимаем монету');
  updateDisplay();
});

function updateDisplay() {
  counterDisplay.innerHTML = counterValue;
}
