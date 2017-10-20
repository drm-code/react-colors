import React, { Component } from 'react';
import Card from './Card';
import md5 from 'js-md5';
import moment from 'moment';

// const colors = ['#B71C1C', '#F48FB1', '#4A148C', '#303F9F'];
const colors = ['#B71C1C', '#F48FB1', '#4A148C', '#303F9F', '#9575CD', '#009688', '#84FFFF', '#D4E157', '#1B5E20', '#9E9E9E', '#4E342E', '#FF5722'];
const dimension = Math.sqrt(colors.length * 2 + 1);
var first, second, pairs,
  ReactToastr = require('react-toastr'),
  { ToastContainer } = ReactToastr,
  ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

class Board extends Component {
  constructor(props) {
    super(props);
    this.check = this.check.bind(this);
    this.state = {
      colors: []
    }
  }

  render() {
    let rows = this.state.colors.map(item => {
      return (
        <div className="row" key={md5(""+Math.random())}>
          <div className="col-3"></div>
          {item.map(c => {
            return <Card color={c.color} check={this.check} key={md5(""+Math.random())} />;
          })}
          <div className="col-3"></div>
        </div>
      );
    });

    return (
      <div className="container">
        <ToastContainer
          ref={input => {this.container = input}}
          toastMessageFactory={ToastMessageFactory}
          className="toast-bottom-right"
          preventDuplicates={false} />
        {rows}
      </div>
    );
  }

  componentWillMount() {
    let arrCards = [],
      matrix = [];

    first = second = undefined;
    pairs = 0;
    colors.forEach(color => {
      arrCards.push({color: color});
      arrCards.push({color: color});
    });
    arrCards.push({color: undefined});
    for (let row = 0; row < dimension; row++) {
      matrix[row] = [];
      for (let col = 0; col < dimension; col++) {
        let remove = Math.floor(Math.random() * arrCards.length);
        matrix[row][col] = arrCards[remove];
        arrCards.splice(remove, 1);
      }
    }
    this.setState({ colors: matrix });
  }

  check(card) {
    if (!card.flipped) {
      card.flip();
      if (!second) {
        if (!first) {
          first = card;
        } else {
          second = card;
          if (first.color === second.color) {
            this.alert('matched');
            first = second = undefined;
            pairs += 1;
          } else {
            this.alert('mismatched');
          }
          if (pairs === colors.length) {
            this.props.finish();
          }
        }
      } else {
        first.flip();
        second.flip();
        first = card;
        second = undefined;
      }
    }
  }

  alert(message, time = null) {
    switch (message) {
      case 'matched':
        this.container.success(
          'Good one', '', {
            timeOut: 3000,
            extendedTimeout: 3000
          }
        ); break;

      case 'mismatched':
        this.container.error(
          'Bad, try again', '', {
            timeOut: 3000,
            extendedTimeout: 3000
          }
        ); break;

      case 'complete':
        this.container.info(
          'Your time was: ' + moment.utc(time * 1000).format("HH:mm:ss"),
          'YOU WON!!!', {
            timeOut: 0,
            extendedTimeout: 0
          }
        );
    }
  }

  setTime(time) { this.alert('complete', time); }

}

export default Board;
