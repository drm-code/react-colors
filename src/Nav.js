import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currTime: props.currTime || "00:00:00",
      bestTime: props.bestTime || "00:00:00"
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <form className="form-inline">
          <button className="btn btn-danger" type="button">
            <i className="fa fa-gamepad fa-lg mr-2"></i>New game
          </button>
        </form>
        <span className="navbar-text">Current time: {this.state.currTime} - Best time: {this.state.bestTime}</span>
      </nav>
    )
  }
}

export default Nav;
