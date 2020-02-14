import React from "react";

import { SoundContext } from "../contexts/SoundContext";

import "../App";

export default class EffectParam extends React.Component {
  static contextType = SoundContext;

  state = {
    value: 0,
    rotate: { transform: "rotateZ(0deg)" },
    yPos: 0,
    increment: 0
  };

  componentWillReceiveProps = () => {
    console.log(this.props);
    this.setState(
      { increment: this.props.maxVal / 260 },
      this.setState(
        { value: this.context.getEffectParam(this.props.effect, this.props.label) },
        this.setState({ rotate: { transform: `rotateZ(${this.value}deg)` } })
      )
    );
  };

  handleMouseMove = e => {
    const mouseY = e.clientY;
    const newVal = this.context.capNum(this.state.value + this.state.yPos - mouseY, 0, 260);
    this.setState({ rotate: { transform: `rotateZ(${newVal}deg)` } });
    this.context.setEffectParam(this.props.effect, this.props.label, newVal * this.state.increment);
  };

  handleMouseDown = e => {
    const mouseY = e.clientY;
    this.setState({ yPos: mouseY });
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", () => {
      this.setState({ yPos: mouseY });
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
