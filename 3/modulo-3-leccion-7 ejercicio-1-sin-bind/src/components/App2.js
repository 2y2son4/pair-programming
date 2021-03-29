import React from 'react';




class AwesomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      comments: '',
      lenguage: '',
    };
  }

  
  handleChange(event) {
    console.log( event.target.id)
    const myEvent = event.target.id;
    if (myEvent === "name") {
      this.setState({ name: event.target.value.toUpperCase() });
    }
    else if  (myEvent === "comments") {   
      this.setState({ comments: event.target.value.toUpperCase() }); 
    }
    else if  (myEvent === "lenguage") {   
      this.setState({ lenguage: event.target.value.toUpperCase() }); 
      console.log( event.target.value);
    }
    
   
    
   
  }
  
  render() {
    return (
      <>

      <form>
        <label htmlFor="name">Nombre de la película:</label>
        <input id="name" type="text" onChange={this.handleChange} />
        
        <label htmlFor="name">Descripción:</label>
        <textarea id="comments"  name="comments" rows="8" cols="80" onChange={this.handleChange}></textarea>
        
        <label htmlfor="lenguage">Idioma</label>
        <select id="lenguage" name="lenguage" onChange={this.handleChange}>
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


