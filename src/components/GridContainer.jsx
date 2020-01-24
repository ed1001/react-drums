import React from "react";

import GridLine from "./GridLine";
import BeatContainer from "./BeatContainer";
import "../App";

function GridContainer(props) {
  return (
    <div className="grid-container">
      <BeatContainer />
      <GridLine setGrid={props.setGrid} instrument="A1"/>
      <GridLine setGrid={props.setGrid} instrument="A2"/>
      <GridLine setGrid={props.setGrid} instrument="A3"/>
    </div>
  )
}

export default GridContainer;
