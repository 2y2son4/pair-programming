'use strict';

const inputElement = document.querySelector('.js-input');
const paragraphElement = document.querySelector('.js-paragraph');
let input = inputElement.value;

function inputHandler() {
  let input = inputElement.value;
  paragraphElement.innerHTML = input;
  saveLocalStorage();
}

inputElement.addEventListener('keyup', inputHandler);

function saveLocalStorage() {
  let userData = inputElement.value;
  localStorage.setItem('name', userData);
}

function getLocalStorage() {
  localStorage.getItem('name');
}

getLocalStorage();
