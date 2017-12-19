import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import axios from 'axios';
import Home from './Home';
import Results from './Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: 'Home',
      date: moment(),
      data: ''
    }
    this.routingSystem = this.routingSystem.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
  }

  componentWillMount() {
    var self = this;
    axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${moment().unix()}&extraParams=crypto_profits`)
      .then(function(response) {
        self.setState({
          btcToday: response.data.BTC
        }, () => console.log(self.state));
      })
      .catch(function(error) {
        console.log(error);
      });
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
    }, () => console.log(this.state.date.unix()));
  }

  apiCall() {
    var self = this;
    axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1509713209&extraParams=crypto_profits')
      .then(function(response) {
        self.setState({
          data: response.data.BTC
        }, () => {
          // CP = COST PRICE
          // SP = SELLING PRICE
          // GAIN = SP - CP
          // GAIN% = (GAIN / CP) * 100
          // LOSS = CP - SP
          // LOSS% = (LOSS / CP)
          const CP = self.state.data.USD;
          const SP = self.state.btcToday.USD;
          if (CP < SP) {
            let gain = SP - CP;
            let gainPercent = (gain / CP) * 100;
            gainPercent = gainPercent.toFixed(2);
            console.log(`Profit percent is ${gainPercent}`);
          } else {
            let loss = CP - SP;
            let lossPercent = (loss / CP) * 100;
            lossPercent = lossPercent.toFixed(2);
            console.log(`Loss percent is ${lossPercent}`);
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <header>
            <div className="logo" onClick={this.apiCall}>
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
