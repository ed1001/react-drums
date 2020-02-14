import React from "react";

import Edit from "./Edit";

import "../App";

export default class Box extends React.Component {
  render() {
    return (
      <div className="edit-container comp">
        <Edit symbol="pencil-alt" edit={"1"} />
        <Edit symbol="eraser" edit={"0"} />
        <Edit symbol="volume-up" edit={"2"} />
        <Edit symbol="trash-alt" edit={"clear"} />
      </div>
    );
  }
}
