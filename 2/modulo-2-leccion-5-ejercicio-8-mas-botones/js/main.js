"use strict";

const buttonElement = document.querySelector('.js-button');
const buttonElement2 = document.querySelector('.js-button2');

const buttonHandler = (event) => {
  const selectButton = event.currentTarget;
  selectButton.classList.toggle('button');
}

buttonElement.addEventListener('click', buttonHandler);

buttonElement2.addEventListener('click', buttonHandler);