import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    console.log('Se ejecuta el constructor');
  }

  

  componentDidMount() {
    console.log('Se está ejecuntando el método componentDidMount ');
    // guardamos el identificador del interval para limpiarlo en componentWillUnmount
    //es el más IMP
    this.intervalId = setInterval(this.incrementCounter, 1000);
    // NOTA: guardamos el identificador en un atributo de la clase y
    // no en el estado ya que no queremos pintar el identificador en el DOM
  }
  componentWillUnmount() {
    console.log('Se está ejecuntando el método   componentWillUnmount ');
    // limpiamos el interval
    clearInterval(this.intervalId);
  }

  //Si no los limpia intenta acceder al componente y como no esta:
  //Warning: Can't perform a React state update on an unmounted component. 

  incrementCounter() {
    // console.log('Se está ejecuntando el método incrementCounter ');
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  }
  render() {
    return <div>Contador: {this.state.counter}</div>;
  }
}

export default Counter;