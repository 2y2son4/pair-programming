'use strict';

const age = document.querySelector('.age');
const ageNumber = parseFloat(age.innerHTML);
const result = ageNumber * 365 *24; 

console.log(result);

