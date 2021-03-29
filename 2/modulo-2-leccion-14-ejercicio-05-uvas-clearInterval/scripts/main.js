'use strict';
const uvas = document.querySelector('.js-uvas');

let counter = 0;
let temp;

function incrementAndShowCounter() {
  counter++;
  uvas.innerHTML = counter;
  if (counter >= 12) {
    clearInterval(temp);
    console.log('tomate');
  }
}

temp = setInterval(incrementAndShowCounter, 200);
