import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Results from './Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: 'Home'
    }
    this.routingSystem = this.routingSystem.bind(this);
  }

  routingSystem() {
    switch(this.state.location) {
      case 'Home':
        return <Home />;
        break;
      case 'Results':
        return <Results />;
        break;
      default:
        return <Home />;
    }
  }

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
          {this.routingSystem()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
