import React from 'react';

const Results = (props) => {
  const { status } = props.globalState;
  const { gainPercent, lossPercent, newCP, newSP } = props.globalState.totalStatus;
  return (
    <section id="results">
      <div className="container">
        <div className="col-md-12">
          <div className="ads"></div>
        </div>
        <div className="col-md-12">
          <h3>Your ${newCP} dollar investment is now </h3>
          <h1>${newSP}</h1>
          <h4>You made { status==='gain' ?
            `${gainPercent}% profit` :
            `${lossPercent}% loss` }
          </h4>
          <a href="#" className="main-btn active">Create account to keep track of all your records</a>
          <a href="#" className="main-btn" onClick={props.reset}>Or check another transaction.</a>
        </div>
        <div className="col-md-12">
          <div className="ads"></div>
        </div>
      </div>
    </section>
  );
}

export default Results;
