import React from "react";

import "../App";

function BPMContainer() {
  return (
    <div className="bpm-container">
      <p id="bpm-desc">BPM</p>
      <p id="bpm-text">180</p>
      <div id="arrows">
        <p className="arrow">▲</p>
        <p className="arrow">▼</p>
      </div>
    </div>
  );
}

export default BPMContainer;
