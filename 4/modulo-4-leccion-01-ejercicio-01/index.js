const fs = require('fs');

// Lección 4.1.2

// Ejercicio 1

const add = (a, b) => {
  return a + b;
};

console.log(add(2, 2));

// Ejercicios 2 y 3

const fistroTxt =
  'Lorem fistrum ese hombree por la gloria de mi madre amatomaa. Por la gloria de mi madre quietooor ese pedazo de va usté muy cargadoo está la cosa muy malar ahorarr te va a hasé pupitaa al ataquerl de la pradera.';

const obj = {
  originalContent: 'Lorem ipsum',
  changedContent: 'LOREM IPSUM',
  textLenght: 11,
};

const txt = JSON.stringify(obj);

// const json = JSON.parse(obj);

console.log(obj);

// función que lee de forma asíncrona el archivo que se quiera y lo consolea tal cual, en mayúsculas y nos da la longitud en caracteres del mismo.
const handleReadFile = (err, fileContent) => {
  if (err !== null) {
    console.log('Error:', err); // si el err existe, lo consolea.
  } else {
    console.log('El contenido del fichero es:', fileContent);
    console.log('El contenido gritando es:', fileContent.toUpperCase());
    console.log('La longitud del contenido es:', fileContent.length);
  }
};

const handleWriteFile = (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('The file has been saved!');
  }
};

fs.readFile('./input-file.txt', 'utf8', handleReadFile); // lee el archivo input-file.txt y lo muestra en la consola.

fs.writeFile('./output.txt', txt + '     ' + fistroTxt.toUpperCase(), handleWriteFile); // guarda ambos textos en el archivo con unos espacios de separación, pero en la misma línea. fistroTxt lo pasa a mayúsculas.

// fs.writeFile('./output-file.json', txt, handleWriteFile);
// → esto no da error pero no para de actualizarse y es un festival.

fs.readFile('./output.txt', 'utf8', handleReadFile); // lee el archivo output.txt y lo muestra en la consola.
