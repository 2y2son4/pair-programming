"use strict";

function getEl (a) {     
    return document.querySelector(a);
}


console.log(getEl(".btn"));

const btnEl = getEl(".btn");

btnEl.innerHTML = "Hola, púlsame.";