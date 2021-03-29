"use strict";

const dogYearsInput = document.querySelector("#dogYears");
const dogYears = parseInt(dogYearsInput.value);

const humanYears = document.querySelector(".humanYears");

const humanYearsDiv = document.querySelector(".humanYearsResult");
const humanYearsResult = humanYearsDiv.innerHTML;

const resultHumanYears = 1 * 15;
const resultHumanYears2 = resultHumanYears + 9;
const resultHumanYears3 = resultHumanYears2 + humanYearsResult * 5;

console.log(dogYears);


if (dogYears === 1) {
  humanYears.innerHTML = `La edad de tu humano es ${resultHumanYears}`;
} else if (dogYears === 2) {
  humanYears.innerHTML = `La edad de tu humano es ${resultHumanYears2}`;
} else {
  humanYears.innerHTML = `La edad de tu humano es ${resultHumanYears3}`;
}