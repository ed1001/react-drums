import React from "react";
import Tone from "tone";

import GridContainer from "./GridContainer";
import TransportContainer from "./TransportContainer";
import BPMContainer from "./BPMContainer";

import A1 from "../HiHatClosed_VintageIndie.wav";
import A2 from "../sounds/Snare_VintageIndie.wav";
import A3 from "../sounds/Kick_VintageIndie.wav";

import "../App";

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpm: 120,
      A1: [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
      ],
      A2: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      A3: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    };
    this.drumKit = new Tone.Sampler(
      {
        A1
      },
      {}
    ).toMaster();
    this.sequence = {};
    this.instruments = ["A1", "A2", "A3"];
  }

  setGrid = (instrument, index, set) => {
    const newState = this.state;
    newState[instrument][index] = set;
    this.setState(newState);
  };

  componentDidMount = drumKit => {
    this.sequence = new Tone.Sequence(
      (time, index) => {
        for (let instrument of this.instruments) {
          if (this.state[instrument][index]) {
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
