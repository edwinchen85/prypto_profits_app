import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Results from './Results';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header>
            <div className="logo">
              Prypto Profits
            </div>

            <nav className="menu">
              <a href="#" className="main-btn">Register</a>
            </nav>
          </header>
          <Results />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
