import React, { useContext } from "react";

import { SoundContext } from "../contexts/SoundContext";

import GridLine from "./GridLine";
import BeatContainer from "./BeatContainer";
import SubDivisionContainer from "./SubDivisionContainer";
import "../App";

function GridContainer() {
  const { instrumentLabels } = useContext(SoundContext);
  return (
    <div className="grid-container comp">
      <BeatContainer />
      <SubDivisionContainer />
      {Object.keys(instrumentLabels).map((instrument, index) => (
        <GridLine instrument={instrument} key={index} />
      ))}
    </div>
  );
}

export default GridContainer;
