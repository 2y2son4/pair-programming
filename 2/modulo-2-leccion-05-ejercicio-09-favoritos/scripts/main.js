"use strict";

const teachersElement = document.querySelector('.teachers');
const oneTeacherElement = teachersElement.querySelector('.teacher');
const divElement = document.querySelector('.favorite');

console.log(teachersElement);
console.log(oneTeacherElement)

const changeClassHandler = function (event) {
    const selectedEvent = event.target;
    
    //console.log(selectedEvent);
    
    if (divElement.innerHTML === "Añadir" || selectedEvent.classList.toggle('teacher--selected')) {
        divElement.innerHTML = "Quitar";
    } else {
        divElement.innerHTML = "Añadir";
    }   

} 


teachersElement.addEventListener('click', changeClassHandler);
