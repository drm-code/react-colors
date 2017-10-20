import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.checkFlip = this.checkFlip.bind(this);
    this.state = {
      flipped: false,
      color: props.color,
      flip: this.flip
    }
  }

  checkFlip = () => {
    this.props.check(this.state);
  }

  flip = () => {
    this.setState({
      flipped: !this.state.flipped
    });
  }

  render() {
    return (
      <div className="col">
        <div className="cs-card-container" onClick={this.checkFlip}>
          <div className={"cs-card " + (this.state.flipped ? 'flipped' : '')}>
            {this.props.color !== undefined &&
            <div className="front text-center" style={{backgroundColor: this.props.color, color: '#fff'}}>
            {this.props.color}</div>}
            {this.props.color === undefined &&
            <div className="front null text-center"><span className="label label-default">Null</span></div>}
            <div className="back text-center"><span className="glyphicon glyphicon-star-empty"></span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
