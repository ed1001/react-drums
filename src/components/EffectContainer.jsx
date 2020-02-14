import React from "react";

import Effect from "./Effect";
import { SoundContext } from "../contexts/SoundContext";

import "../App";

export default class EffectContainer extends React.Component {
  static contextType = SoundContext;

  renderSwitch = effect => {
    switch (effect) {
      case "reverb":
        return (
          <Effect
            label="reverb"
            paramList={[
              ["wet", 1],
              ["preDelay", 10],
              ["decay", 10]
            ]}
            myFunc={this.change}
          />
        );
      case "delay":
        return (
          <Effect
            label="delay"
            paramList={[
              ["wet", 1],
              ["delayTime", 1],
              ["feedback", 1]
            ]}
            myFunc={this.change}
          />
        );
      default:
        break;
    }
  };

  render() {
    return <div className="effect-container comp">{this.renderSwitch(this.context.effects[this.context.currentEffect])}</div>;
  }
}
