import React, { useContext } from "react";

import { SoundContext } from "../contexts/SoundContext";
import "../App";

const Note = props => {
  const { mouseDown, edit, editGrid, setGrid } = useContext(SoundContext);
  return (
    <div
      className={`${props.class} ${edit ? "mouse-" + edit : ""}`}
      onMouseDown={() => {
        setGrid(props.note, props.instrument, edit);
      }}
      onMouseEnter={() => {
        if (mouseDown && edit) {
          editGrid(props.note, props.instrument, edit);
        }
      }}
    ></div>
  );
};

export default Note;
