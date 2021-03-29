"use strict";
const spanResult = document.querySelector(".greeting");
const userName = "Adriana";

if (userName === "Camila" || userName === "Adriana") {
    spanResult.innerHTML = `Bienvenida, ${userName}.`;
    console.log(`Bienvenida, ${userName}`);
} else {
    spanResult.innerHTML = "Lo siento pero el usuario que has introducido no está registrado";
    console.log("Lo siento pero el usuario que has introducido no está registrado");
}