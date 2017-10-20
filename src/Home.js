import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="jumbotron text-center">
              <h1 className="display-3 mb-4">Welcome to<br/>
                <span className="badge badge-pill badge-primary">C</span>&nbsp;
                <span className="badge badge-pill badge-success">O</span>&nbsp;
                <span className="badge badge-pill badge-danger">L</span>&nbsp;
                <span className="badge badge-pill badge-warning">O</span>&nbsp;
                <span className="badge badge-pill badge-secondary">R</span>&nbsp;
                <span className="badge badge-pill badge-info">S</span>
              </h1>
              <h2>A funny memory color game, enjoy :)</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <p>Powered by:</p>
            <img className="logo" src="ReactJS.png" title="ReactJS" alt="ReactJS" />
            <img className="logo" src="bootstrap-stack.png" title="Twitter Bootstrap" alt="Twitter Bootstrap" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
