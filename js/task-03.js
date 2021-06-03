const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createTag = images.map(image => {
  const getNewMarkUp = `<li><img src = "${image.url}" alt ="${image.alt}" width = 420px height = 240px> </li>`;
  return getNewMarkUp;
});

const addImage = document.querySelector('#gallery');

addImage.insertAdjacentHTML('afterbegin', createTag.join(' '));

const addStyle = addImage.classList.add('gallery-pic');

console.log(addImage);
