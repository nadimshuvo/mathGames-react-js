import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="main-ui">
        <p className="problem"></p>
        <form action="" className="our-form">
          <input type="text" className="our-field" autoComplete="off" />
          <button>Submit</button>
        </form>

        <p className="status">
          You need 10 more points, and are allowed to make 2 more mistakes.
        </p>

        <ProgressBar />
      </div>

      {/* Overlay Pop Up */}
      <div className="overlay">
        <div className="overlay-inner">
          <p className="end-message"></p>
          <button className="reset-button">Start Over</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

function ProgressBar() {
  return (
    <div className="progress">
      <div className="boxes">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}
