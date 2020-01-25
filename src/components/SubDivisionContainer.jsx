import React, { useContext } from "react";

import { GridContext } from "../contexts/GridContext";

import SubDivision from "./SubDivision";
import "../App";

function SubDivisionContainer() {
  const { instruments, currentDivision } = useContext(GridContext);
  return (
    <div className="beat-container">
      {instruments["A1"].map((_, index) => (
        <SubDivision
          element={index}
          class={`subdivision ${currentDivision === index && "subdiv-active"}`}
          key={index}
        />
      ))}
    </div>
  );
}

export default SubDivisionContainer;
