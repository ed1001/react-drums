import React from "react";

import "../App";

const Note = (props) => {
  return(
    <div className={props.class} onClick={() => {
      props.setGrid(props.note, props.instrument);
    }}></div>
  )
}

export default Note;
