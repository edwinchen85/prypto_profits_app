import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Home from './Home';
import Results from './Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: 'Home',
      date: moment()
    }
    this.routingSystem = this.routingSystem.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  routingSystem() {
    switch(this.state.location) {
      case 'Home':
        return <Home handleDateChange={this.handleDateChange} globalState={this.state} />;
        break;
      case 'Results':
        return <Results />;
        break;
      default:
        return <Home />;
    }
  }

  handleDateChange(date) {
    this.setState({
      date: date
    }, () => console.log(this.state));
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
