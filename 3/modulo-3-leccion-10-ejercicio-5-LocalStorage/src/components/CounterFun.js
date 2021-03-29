import React, { useState, useEffect } from 'react';

const CounterFun = () => {
  // usamos el hook useState para crear counter en el estado del componente
  const [counter, setCounter] = useState(0);
  // usamos el hook useEffect para gestionar los ciclos de vida del componente
  useEffect(() => {
    console.log('Me estoy montando');
    // las 3 siguientes líneas se ejecutan al montar y renderizar el componente
    // useEffect que se usa para realizar acciones en las diferentes fases del ciclo de vida.
    //  Se llama useEffect porque también nos sirve para 
    // producir efectos secundarios en la página, es decir, aquellas acciones que React no sabe hacer.

    
    let intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    // la función retornada a continuación se ejecuta al desmontar y renderizar el componente
    //Comenta el retorno de la función useEffect y observa qué aparece en consola. ¿Sabrías decir por qué?
    return () => {
        console.log('Me estoy desmontando');
      clearInterval(intervalId);
    };
  });
  return <div> Componente Funcional: {counter}</div>;
};

export default CounterFun;

// console.log('Me estoy renderizando');