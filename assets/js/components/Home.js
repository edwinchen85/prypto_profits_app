import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const Home = (props) => {
  return (
    <section id="home">
      <div className="container">
        <div className="col-md-6">
          <img className="bitcoin-logo" src="/img/bitcoin-logo.png" alt="bitcoin-logo"/>
        </div>
        <div className="col-md-6">
          <h2>Enter Transaction</h2>

          <label htmlFor="amount">Crypto amount</label>
          <input type="text" name="amount" id="amount"
            onChange={props.onInputChange}
            value={props.globalState.cryptoAmount} />

          <label htmlFor="date">Date</label>
          <DatePicker selected={props.globalState.date} onChange={props.handleDateChange} />

          <button type="submit">Check Profits</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
