const getInput = document.querySelector('input');
const getDataLength = getInput.getAttribute('data-length');

getInput.addEventListener('blur', () => {
  if (getInput.value.length === +getDataLength) {
    addDelClass('valid', 'invalid');
  }
  if (
    getInput.value.length > getDataLength ||
    getInput.value.length < getDataLength
  ) {
    addDelClass('invalid', 'valid');
  }
});

function addDelClass(add, remove) {
  return getInput.classList.add(add), getInput.classList.remove(remove);
}
