"use strict";


const buttonElement = document.querySelector('.button');
const buttonElement2 = document.querySelector('.button-2');    

function buttonHandler(event) {
    console.log(event);
};


buttonElement.addEventListener('click', buttonHandler);
buttonElement2.addEventListener('mouseover', buttonHandler);