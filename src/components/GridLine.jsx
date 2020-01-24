import React, { useContext } from "react";
import { GridContext } from "../contexts/GridContext";

import Note from "./Note";

import "../App";

function GridLine(props) {
    const { instruments, setGrid } = useContext(GridContext);
  return (
    <div className="grid-line">
      { instruments[props.instrument].map((note, index) =>
        <Note class={`note ${note ? "note-active" : ""}`} note={index} instrument={props.instrument} setGrid={setGrid}/>
      )}
    </div>
  );
}

export default GridLine;
