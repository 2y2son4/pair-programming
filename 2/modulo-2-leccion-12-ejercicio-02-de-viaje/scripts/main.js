'use strict';

const selectElement = document.querySelector('.js-cities');
const divImgElement = document.querySelector('.js-images');

function handlerSelect() {
  const allImg = document.querySelectorAll('.js-images img');

  for (let i = 0; i < allImg.length; i++) {
    allImg[i].remove();
  }
  selectElement.value;
  console.log(selectElement.value);
  if (selectElement.value !== '') {
    for (let i = 1; i <= 3; i++) {
      let cityValue = selectElement.value;
      console.log(selectElement.value);
      const imgElement = document.createElement('img');
      imgElement.src = `./images/${cityValue}-${i}.jpg`;
      console.log(cityValue);
      console.log(imgElement.src);
      imgElement.style.width = '250px';
      imgElement.style.height = '150px';
      imgElement.style.margin = '10px';
      imgElement.style.borderRadius = '5px';
      imgElement.style.objectFit = 'cover';
      divImgElement.appendChild(imgElement);
    }
  }
}

selectElement.addEventListener('change', handlerSelect);
