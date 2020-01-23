import React from "react";
import Transport from "./Transport";

import "../App";

export default class TransportContainer extends React.Component {
  start = () => {
    this.props.transport.start();
  };
  pause = () => {
    this.props.transport.pause();
  };
  stop = () => {
    this.props.transport.pause();
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
