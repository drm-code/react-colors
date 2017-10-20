import React, { Component } from 'react';
import moment from 'moment';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.home = this.home.bind(this);
    this.game = this.game.bind(this);
    this.tick = this.tick.bind(this);
    this.state = {
      time: undefined,
      best: parseInt(localStorage.getItem('best'), 10) || 0,
      interval: undefined
    }
  }

  home() {
    this.props.home(true);
    this.clear();
    this.setState({
      time: undefined,
      interval: undefined
    });
  }

  game() {
    this.props.home(true, true);
    this.clear();
    setTimeout(() => {
      this.props.home(false);
      this.setState({
        time: 0,
        interval: setInterval(this.tick, 1000)
      });
    }, 100);
  }

  tick() {this.setState(prevState => ({ time: prevState.time + 1 }));}

  clear() {
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
  }

  finish() {
    this.clear();
    if (this.state.best === 0 || this.state.time < this.state.best) {
      localStorage.setItem('best', this.state.time);
      this.setState({ best: this.state.time });
    }
    return this.state.time;
  }

  render() {
    return (
      <div className="container mb-3">
        <nav className="navbar navbar-dark bg-dark">
          <form className="form-inline">
            <a className="navbar-brand" href="#" onClick={this.home}>
              <i className="fa fa-home fa-lg"></i>
            </a>
            <button className="btn btn-primary" type="button" onClick={this.game}>
              <i className="fa fa-gamepad fa-lg mr-2"></i>New game
            </button>
          </form>
          <span className="navbar-text">
            {this.state.time !== undefined &&
              <span>Current time: {moment.utc(this.state.time * 1000).format("HH:mm:ss")} - </span>
            }
            <span>Best time: {moment.utc(this.state.best * 1000).format("HH:mm:ss")}</span>
          </span>
        </nav>
      </div>
    );
  }
}

export default Nav;
