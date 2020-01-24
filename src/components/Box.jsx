import React from "react";
import { GridContext } from "../contexts/GridContext";
import Tone from "tone";

import GridContainer from "./GridContainer";
import TransportContainer from "./TransportContainer";
import BPMContainer from "./BPMContainer";

import A1 from "../sounds/RideBell_VintageIndie.wav";
import A2 from "../sounds/Ride_VintageIndie.wav";
import A3 from "../sounds/HiHatOpen_VintageIndie.wav";
import A4 from "../sounds/HiHatClosed_VintageIndie.wav";
import A5 from "../sounds/Snare_VintageIndie.wav";
import A6 from "../sounds/XStick_VintageIndie.wav";
import A7 from "../sounds/Tom_VintageIndie.wav";
import A8 from "../sounds/Kick_VintageIndie.wav";

import "../App";

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpm: 120,
    };
    this.drumKit = new Tone.Sampler(
      {
        A1, A2, A3, A4, A5, A6, A7, A8
      },
      {}
    ).toMaster();
    this.sequence = {};
    this.instruments = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"];
  }

  static contextType = GridContext

  componentDidMount = drumKit => {
    this.sequence = new Tone.Sequence(
      (time, index) => {
        for (let instrument of this.instruments) {
          if (this.context.instruments[instrument][index]) {
            this.drumKit.triggerAttack(instrument);
          }
        }
      },
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "16n"
    ).start(0);
  };

  render() {
    return (
      <div className="box">
        <TransportContainer transport={Tone.Transport} />
        <BPMContainer />
        <GridContainer setGrid={this.setGrid} />
      </div>
    );
  }
}
