import React from "react";
import { GridContext } from "../contexts/GridContext";

import GridContainer from "./GridContainer";
import ControlContainer from "./ControlContainer";
import BPMContainer from "./BPMContainer";
import EditContainer from "./EditContainer";
import EffectContainer from "./EffectContainer";

import "../App";

export default class Box extends React.Component {
  static contextType = GridContext;

  render() {
    return (
      <div className="box">
        <div className="left-container">
          <div className="upper-container">
            <ControlContainer />
            <EditContainer />
            <BPMContainer />
          </div>
          <GridContainer setGrid={this.setGrid} />
        </div>
        <EffectContainer />
      </div>
    );
  }
}
