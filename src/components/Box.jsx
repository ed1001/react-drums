import React from "react";

import GridContainer from "./GridContainer";
import ControlContainer from "./ControlContainer";
import BPMContainer from "./BPMContainer";
import EditContainer from "./EditContainer";
import EffectContainer from "./EffectContainer";

import "../App";

function Box() {
  return (
    <div className="box">
      <div className="main-container">
        <div className="left-container">
          <div className="upper-container">
            <ControlContainer />
            <EditContainer />
            <BPMContainer />
          </div>
          <GridContainer />
        </div>
        <EffectContainer />
      </div>
    </div>
  );
}

export default Box;
