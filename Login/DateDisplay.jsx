import React from 'react';
import moment from 'moment';

import Ticker from './Ticker';

function DateDisplay() {
  return (
    <div className="dateTime">
      <div className="innerBox">
        <div className="left day">
          <div>{moment().format("MMM")}</div> <span>{moment().format("ddd")}</span>
        </div>
        <div className="right date">
          {moment().format("DD")}
        </div>
        <div className="clearfix"></div>
      </div>
      <Ticker/>
    </div>
  );
}

export default DateDisplay;
