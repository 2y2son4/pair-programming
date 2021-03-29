'use strict';
const uvas = document.querySelector('.js-uvas');

let counter = 0;

function incrementAndShowCounter() {
  if (counter < 12) {
    counter++;
    uvas.innerHTML = counter;
    console.log('tomate');
  }
}

setInterval(incrementAndShowCounter, 1000);
