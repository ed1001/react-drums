import React, { useContext } from "react";
import { GridContext } from "../contexts/GridContext";

import Note from "./Note";

import "../App";

function GridLine(props) {
  const context = useContext(GridContext);
  return (
    <div className="grid-line">
      { context.instruments[props.instrument].map((note, index) =>
        <Note class={`note ${note ? "note-active" : ""}`} note={index} instrument={props.instrument} setGrid={context.setGrid}/>
      )}
    </div>
  );
}

export default GridLine;
