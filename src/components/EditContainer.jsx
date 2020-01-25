import React from "react";
import { GridContext } from "../contexts/GridContext";

import Edit from "./Edit";

import "../App";

export default class Box extends React.Component {
  static contextType = GridContext;

  render() {
    return (
      <div className="edit-container">
        <Edit type="paint" />
        <Edit type="eraser" />
      </div>
    );
  }
}
