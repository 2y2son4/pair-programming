'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

const studentsArray = runners.filter((pepino) => pepino.student);

console.log(studentsArray);

const studentWinner = studentsArray.reduce((acc, runner) => {
  console.log(acc, runner);
  if (acc.time < runner.time) {
    return acc;
  } else {
    return runner;
  }
});
