import React, { Component } from 'react';
import TickerFormat from './TickerFormat';

export default class Ticker extends Component{

  constructor(props) {
    super(props);

    this.state = { secondsElapsed: 180 };
    this.tick = this.tick.bind(this);
    this.interval = null;
  }

  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="innerBox" id="time">
        <TickerFormat secondsElapsed={this.state.secondsElapsed}/>
        <div className="clearfix"></div>
      </div>
    );
  }
};
