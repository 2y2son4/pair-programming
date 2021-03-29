"use strict";

const buttonElement = document.querySelector('.js-button');

const buttonHandler = () => {
  buttonElement.classList.toggle('button');
}

buttonElement.addEventListener('click', buttonHandler);