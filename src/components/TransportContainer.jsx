import React from "react";

import { GridContext } from "../contexts/GridContext";
import Transport from "./Transport";

import "../App";

export default class TransportContainer extends React.Component {
  static contextType = GridContext;

  start = () => {
    this.props.transport.bpm.value = this.context.bpm;
    this.props.transport.start();
  };
  pause = () => {
    this.props.transport.pause();
  };
  stop = () => {
    this.props.transport.stop();
  };
  render() {
    return (
      <div className="transport-container">
        <Transport symbol={"play"} action={this.start} />
        <Transport symbol={"pause"} action={this.pause} />
        <Transport symbol={"stop"} action={this.stop} />
      </div>
    );
  }
}
