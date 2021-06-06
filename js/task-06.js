const getInput = document.querySelector('input');
const getDataLength = getInput.getAttribute('data-length');

getInput.addEventListener('blur', () => {
  if (getInput.value.length === +getDataLength) {
    changeClass('valid', 'invalid');
  }
  if (
    getInput.value.length > getDataLength ||
    getInput.value.length < getDataLength
  ) {
    changeClass('invalid', 'valid');
  }
});

function changeClass(add, remove) {
  return getInput.classList.add(add), getInput.classList.remove(remove);
}
