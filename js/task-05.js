const getInput = document.querySelector('#name-input');

const getSpan = document.querySelector('#name-output');

getInput.addEventListener('input', updateSpane);

getInput.addEventListener('input', emptySpane);

function updateSpane(event) {
  getSpan.textContent = event.target.value;
}

function emptySpane(event) {
  if (event.target.value === '') {
    getSpan.textContent = 'незнакомец';
  }
}
