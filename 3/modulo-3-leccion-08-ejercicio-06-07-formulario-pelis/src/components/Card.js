import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { name, description, language } = this.props;
    return (
      <article className="card">
        <h2 className="card__title">Título: {name}</h2>
        <p className="card__description">Resumen: {description}</p>
        <p className="card__language">Idioma: {language}</p>
      </article>
    );
  }
}

export default Card;
