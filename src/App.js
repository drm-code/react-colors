import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Board from './Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      home: true,
      reload: false
    }
  }

  render() {
    return (
      <div>
        <Nav
          home={this.home}
          ref={nav => { this.nav = nav; }} />
        {this.state.home && !this.state.reload && <Home />}
        {!this.state.home && !this.state.reload &&
          <Board
            ref={board => { this.board = board; }}
            finish={this.finish}
            />}
      </div>
    );
  }

  home = (homeVal, reloadVal = false) => {
    this.setState({
      home: homeVal,
      reload: reloadVal
    });
  }

  finish = () => this.board.setTime(this.nav.finish());    
}

export default App;
