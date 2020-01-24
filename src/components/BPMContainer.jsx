import React from "react";

import "../App";

function BPMContainer(props) {
  return (
    <div className="bpm-container">
      <p id="bpm-desc">BPM</p>
      <p id="bpm-text">{props.bpm}</p>
      <div id="arrows">
        <p className="arrow" onClick={() => props.setBpm(props.bpm + 2)}>▲</p>
        <p className="arrow" onClick={() => props.setBpm(props.bpm - 2)}>▼</p>
      </div>
    </div>
  );
}

export default BPMContainer;
