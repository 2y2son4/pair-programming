import React, { useState } from 'react';




class AwesomeForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        comments: '',
        lenguage: '',
      };
    }
  
  onChange = event => {
      
       const minombre = event.target.id;
    //    const comments = event.target.id;
    //    const lenguage = event.target.id;
      
        this.setState({
          [minombre]: event.target.value,
        //   [comments]: event.target.value,
        //   [lenguage]: event.target.value,
        });
       
      }
  
    
    render() {
      return (
        <>
  
        <form>
          <label htmlFor="name">Nombre de la película:</label>
          <input id="name" type="text" onChange={this.onChange} />
          
          <label htmlFor="name">Descripción:</label>
          <textarea id="comments"  name="comments" rows="8" cols="80" onChange={this.onChange}></textarea>
          
          <label htmlfor="lenguage">Idioma</label>
          <select id="lenguage" name="lenguage" onChange={this.onChange}>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          </select>
          </form>
  
          <div>
            <p>Película elegida:  {this.state.name}</p>
            <span>Descripción propuesta:{this.state.comments} </span>
            <h4>Idioma seleccionado:{this.state.lenguage}</h4>
          </div>
      </>
      );
    }
  }
  export default AwesomeForm;
  