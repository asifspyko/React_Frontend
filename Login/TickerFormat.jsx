import React, { Component } from 'react';
import moment from 'moment';

export default class TickerFormat extends Component {
  constructor(props) {
    super(props);

    this.state = {mins: '03', seconds: '00', color: 'white'};
    this.format = this.format.bind(this);
    this.interval = null;
  }

  format() {
    var self = this;
    this.interval = setInterval(function () {
      var secondsElapsed = self.props.secondsElapsed;
      var d = moment.duration(secondsElapsed * 1000, 'milliseconds');
      var mins = Math.floor(d.asMinutes());
      var secs = Math.floor(d.asSeconds()) - mins * 60;
      if (secs < 10) {
        secs = "0" + secs;
      }
      else {
        secs = secs;
      }
      if (mins == 0 && secs < 60)
        self.setState({color: 'red'});
      self.setState({mins: "0" + mins, seconds: secs});
    }, 500);
  }

  render() {
    return (<div className="ticker-formatter">
      <div>
        {this.state.mins}</div>
      <span></span>

      <div className="right-seconds">{this.state.seconds}</div>
    </div>);
  }

  componentDidMount() {
    this.format();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.setState({mins: '', seconds: '', color: ''});
  }

  shouldComponentUpdate() {

    if (parseInt(this.state.mins) == 0 && parseInt(this.state.seconds) < 60) {
      $$("#password").addClass('red-text');
      $$("#email").addClass('red-text');
      $$('.ticker-formatter').addClass('red-text');
    }

    if (parseInt(this.state.mins) == 0 && parseInt(this.state.seconds) == 0) {
      clearInterval(this.interval);
      $$("#expired_button").show();
      $$("#tryagain-button").hide();
      $$('.dummy_button').hide();
      $$("#password").prop("disabled", "true");
      $$("#email").prop("disabled", "true");

      return false;
    }
    return true;
  }
};
