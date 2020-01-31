import React, { useContext } from "react";

import EffectParam from "./EffectParam";
import { GridContext } from "../contexts/GridContext";

import "../App";

function Effect(props) {
  const { effects, currentEffect, setContextState, getEffectParam } = useContext(GridContext);

  return (
    <div className="effect">
      <div className="effect-name">
        <div
          className="effect-nav"
          onClick={() => {
            setContextState("currentEffect", Math.abs((currentEffect - 1) % effects.length));
          }}
        >
          {"<"}
        </div>
        <div>{props.label}</div>
        <div className="effect-nav" onClick={() => setContextState("currentEffect", Math.abs((currentEffect + 1) % effects.length))}>
          {">"}
        </div>
      </div>
      <div className="effect-params">
        {props.paramList.map(([param, maxVal]) => {
          return <EffectParam effect={props.label} label={param} maxVal={maxVal} value={getEffectParam(props.label, param)} />;
        })}
      </div>
    </div>
  );
}

export default Effect;
