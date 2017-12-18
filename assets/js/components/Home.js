import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="col-md-6">
          <img className="bitcoin-logo" src="/img/bitcoin-logo.png" alt="bitcoin-logo"/>
        </div>
        <div className="col-md-6">
          <h2>Enter Transaction</h2>

          <label htmlFor="amount">Crypto amount</label>
          <input type="text" name="amount" id="amount"/>

          <label htmlFor="date">Date</label>
          <input type="text" name="date" id="date"/>

          <button type="submit">Check Profits</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
