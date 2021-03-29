'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 90 },
  { name: 'Luna Lovegood', time: 3 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

// winner → tiempo más bajo; resultado → posición del array con el objeto.

const winner = runners.reduce((acc, runner) => {
  console.log(acc, runner);
  if (acc.time < runner.time) {
    return acc;
  } else {
    return runner;
  }
});

console.log(winner);
