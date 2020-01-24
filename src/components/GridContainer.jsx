import React, { useContext } from "react";

import { GridContext } from "../contexts/GridContext";

import GridLine from "./GridLine";
import BeatContainer from "./BeatContainer";
import "../App";

function GridContainer(props) {
    const { instruments } = useContext(GridContext);
  return (
    <div className="grid-container">
      <BeatContainer />
      { Object.keys(instruments).map((instrument) =>
        <GridLine instrument={instrument}/>
      )}
    </div>
  )
}

export default GridContainer;
