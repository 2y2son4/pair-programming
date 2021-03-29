"use strict";
const mainContainer = document.querySelector('.container');
const h1 = '<h1>Lorem ipsum</h1>';
const img = '<img src="http://via.placeholder.com/350x150" alt="Placeholder">';
const paragraph = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>';
mainContainer.innerHTML = h1 + img + paragraph;
const mainTitle = document.querySelector('h1');
const mainParagraph = document.querySelector('p');


console.log(mainContainer);
console.log(mainTitle);
console.log(mainParagraph);

//más rápido.
const img2 = document.createElement('img'); 
img2.setAttribute('alt', 'webo');
img2.setAttribute('src', 'http://via.placeholder.com/350x150');
document.querySelector('.container').append(img2);
console.log(img2);



