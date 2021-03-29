import React from 'react';

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
    // this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerNumber = this.handlerNumber.bind(this);
  }
  // handlerSubmit(ev) {
  //   ev.preventDefault();
  // }

  handlerNumber(ev) {
    this.setState({ filter: ev.target.value });
  }
  render() {
    const numbers = [1, 4, 6, 8, 45, 89];

    const result = numbers
      .filter((number) => number >= this.state.filter)
      .map((number, i) => {
        return <li key={i}>{number}</li>;
      });

    return (
      <>
        <ul className="list">{result}</ul>
        <form action="" className="form" onSubmit={this.handlerSubmit}>
          <input
            type="number"
            name="number"
            value={this.state.filter}
            className="form__input"
            onChange={this.handlerNumber}
          />
        </form>
      </>
    );
  }
}

export default Numbers;
