"use strict";

function getEl (a) {  
    if (a === ''){
        console.log(`El selector no puede estar vacío`);
    } else {
        const elementDebbugger = document.querySelector(a);
        if (elementDebbugger === null) {
            console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`);
        } else {
            return elementDebbugger;
        }
    }
   
}

console.log(getEl(".btn"));

const btnEl = getEl(".btn");


getEl("")
 btnEl.innerHTML = "Hola, púlsame.";

