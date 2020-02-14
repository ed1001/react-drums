import React from "react";

import { Transport } from "tone";

import Control from "./Control";

import "../App";

function start() {
  Transport.start();
}
function pause() {
  Transport.pause();
}
function stop() {
  Transport.stop();
}

function ControlContainer() {
  return (
    <div className="control-container">
      <Control symbol={"play"} action={start} />
      <Control symbol={"pause"} action={pause} />
      <Control symbol={"stop"} action={stop} />
    </div>
  );
}

export default ControlContainer;
