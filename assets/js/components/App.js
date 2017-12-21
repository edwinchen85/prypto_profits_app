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
      data: '',
      cryptoAmount: 1,
      status: '',
      totalStatus: ''
    }
    this.routingSystem = this.routingSystem.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.reset = this.reset.bind(this);
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
        return <Home
          handleDateChange={this.handleDateChange}
          globalState={this.state}
          onInputChange={this.onInputChange}
          apiCall={this.apiCall} />;
        break;
      case 'Results':
        return <Results globalState={this.state} reset={this.reset} />;
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

  onInputChange(event) {
    this.setState({
      cryptoAmount: event.target.value
    });
  }

  apiCall() {
    var self = this;
    axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${self.state.date.unix()}&extraParams=crypto_profits`)
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
          let newCP = self.state.cryptoAmount;
          newCP = newCP * CP;
          const SP = self.state.btcToday.USD;
          let newSP = self.state.cryptoAmount;
          newSP = newSP * SP;
          if (newCP < newSP) {
            let gain = newSP - newCP;
            let gainPercent = (gain / newCP) * 100;
            gainPercent = gainPercent.toFixed(2);
            console.log(`Profit percent is ${gainPercent}`);

            // set state with totals and change location
            self.setState({
              location: 'Results',
              status: 'gain',
              totalStatus: {
                newCP: newCP.toFixed(2),
                newSP: newSP.toFixed(2),
                gainPercent
              }
            }, () => console.log(self.state));
          } else {
            let loss = newCP - newSP;
            let lossPercent = (loss / newCP) * 100;
            lossPercent = lossPercent.toFixed(2);
            console.log(`Loss percent is ${lossPercent}`);

            // set state with totals and change location
            self.setState({
              location: 'Results',
              status: 'loss',
              totalStatus: {
                newCP: newCP.toFixed(2),
                newSP: newSP.toFixed(2),
                lossPercent
              }
            }, () => console.log(self.state));
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  reset() {
    this.setState({
      location: 'Home',
      date: moment(),
      data: '',
      cryptoAmount: 1,
      status: '',
      totalStatus: ''
    })
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
