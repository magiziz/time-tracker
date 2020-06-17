import React, { Component } from "react";
import TimerCounter from "./TimerCounter";

export class Tracker extends Component {
  render() {
    return (
      <div className="TrackerPage">
        <TimerCounter />
      </div>
    );
  }
}

export default Tracker;
