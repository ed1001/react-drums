import React, { useContext } from "react";
import { GridContext } from "../contexts/GridContext";

import Note from "./Note";

import "../App";

function GridLine(props) {
    const { instruments, setGrid, currentDivision } = useContext(GridContext);
  return (
    <div className="grid-line">
      { instruments[props.instrument].map((note, index) =>
        <Note class={`note ${note && index === currentDivision ? "note-playing" : note ? "note-active" : ""}`} note={index} instrument={props.instrument} setGrid={setGrid} key={index}/>
      )}
    </div>
  );
}

export default GridLine;
