
import { Route, Switch, Link } from 'react-router-dom';
import Counter from './Counter';
import CounterFun from './CounterFun';
import Relax from './Relax';
import TextLocal from './TextLocal';


import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Contador</Link>
            </li>
            <li>
              <Link to="/relax">Frase relajante</Link>
            </li>
            <li>
              <Link to="/compFun">Contador Fun</Link>
            </li>
          </ul>
        </nav>
        <div><Link to="/textLocal">Guardar texto:</Link></div>
      </header>
      <main>
        <Switch>
         
          <Route exact path="/" component={Counter} />
          <Route path="/relax" component={Relax} />
          <Route path="/textLocal" component={TextLocal} />
          <Route exact path="/compFun" component={CounterFun} />
          
        </Switch>
      </main>
    </div>
    );
  }
}

export default App;