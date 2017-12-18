import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
              <a href="#">Register</a>
            </nav>
          </header>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
