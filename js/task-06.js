const getInput = document.querySelector('input');
const getDataLength = getInput.getAttribute('data-length');

getInput.addEventListener('blur', () => {
  if (getDataLength) {
    getInput.classList.add('valid');
    getInput.classList.remove('invalid');
  }
  if (
    getInput.value.length > getDataLength ||
    getInput.value.length < getDataLength
  ) {
    getInput.classList.add('invalid');
    getInput.classList.remove('valid');
  }
});
