import React from 'react';
import ls from '.././services/localSorage';

class TextLocal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:''
   
    };
    this.handleChange = this.handleChange.bind(this);
    this.handelpreventdefault = this.handelpreventdefault.bind(this);
  }

  componentDidMount() {
    // leer del local storage lo hacemos en el componentDidMount
    const localStorageData = ls.get2('email', this.state.email);
    if (localStorageData) {
      this.setState(localStorageData);
    }
  }

  componentDidUpdate() {
    // escribir en el local storage lo hacemo cuando el componente ya ha sido actualizado
    ls.set2('email', this.state);
  }



  //Si no los limpia intenta acceder al componente y como no esta:
  //Warning: Can't perform a React state update on an unmounted component. 

  handelpreventdefault(ev)  {
  ev.preventDefault();
  }

  handleChange(ev) {
    this.setState({
      email: ev.target.value
    });
  }
  render() {
    return <div>
      <form onSubmit={this.handelpreventdefault}>
         <label htmlFor="comments">Comentarios:
            <input
              className="form__input-text"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
             />
           </label>
          </form>
   </div>;
  }
}



export default TextLocal;