const getImput = document.querySelector('#font-size-control');
const getText = document.querySelector('#text');

const changeFontSize = () => {
  getText.style.fontSize = `${getImput.value}px`;
};

getImput.addEventListener('input', changeFontSize);
