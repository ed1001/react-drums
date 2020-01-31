import React from "react";

import { GridContext } from "../contexts/GridContext";

import "../App";

export default class EffectParam extends React.Component {
  static contextType = GridContext;

  state = {
    value: 0,
    rotate: { transform: "rotateZ(0deg)" },
    yPos: 0,
    increment: 0
  };

  componentWillMount = () => {
    this.setState({ increment: this.props.maxVal / 260 });
  };

  handleMouseMove = e => {
    const newVal = this.context.capNum(this.state.value + this.state.yPos - e.clientY, 0, 260);
    this.setState({ value: newVal, yPos: e.clientY, rotate: { transform: `rotateZ(${newVal}deg)` } });
    this.context.setEffectParam(this.props.effect, this.props.label, newVal * this.state.increment);
  };

  handleMouseDown = e => {
    this.setState({ yPos: e.clientY });
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", this.handleMouseMove);
    });
  };

  render() {
    return (
      <div className="effect-param">
        <p>{this.props.label}</p>
        <div className="dial" style={this.state.rotate} onMouseDown={this.handleMouseDown}></div>
      </div>
    );
  }
}
