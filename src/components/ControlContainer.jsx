import React from "react";

import { Transport, Draw } from "tone";

import { GridContext } from "../contexts/GridContext";
import Control from "./Control";

import "../App";

export default class ControlContainer extends React.Component {
  static contextType = GridContext;

  start = () => {
    Transport.start();
  };
  pause = () => {
    Transport.pause();
  };
  stop = () => {
    Transport.stop();
    Draw.cancel();
    setTimeout(() => {
      this.context.setDivision(-1);
    }, 100);
  };
  render() {
    return (
      <div className="control-container">
        <Control symbol={"play"} action={this.start} />
        <Control symbol={"pause"} action={this.pause} />
        <Control symbol={"stop"} action={this.stop} />
      </div>
    );
  }
}
