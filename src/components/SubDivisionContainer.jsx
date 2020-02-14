import React, { useContext } from "react";

import { SoundContext } from "../contexts/SoundContext";

import SubDivision from "./SubDivision";
import "../App";

function SubDivisionContainer() {
  const { instruments, currentDivision, edit } = useContext(SoundContext);
  return (
    <div className={`beat-container ${edit ? "mouse-" + edit : ""}`}>
      {instruments["A1"].map((_, index) => (
        <SubDivision
          element={index}
          class={`${currentDivision === index ? "subdivision subdiv-active" : "subdivision"}`}
          key={index}
        />
      ))}
    </div>
  );
}

export default SubDivisionContainer;
