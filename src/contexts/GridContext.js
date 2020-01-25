import React, { Component, createContext } from "react";

import Tone from "tone";

import A1 from "../sounds/RideBell_VintageIndie.wav";
import A2 from "../sounds/Ride_VintageIndie.wav";
import A3 from "../sounds/HiHatOpen_VintageIndie.wav";
import A4 from "../sounds/HiHatClosed_VintageIndie.wav";
import A5 from "../sounds/Snare_VintageIndie.wav";
import A6 from "../sounds/XStick_VintageIndie.wav";
import A7 from "../sounds/Tom_VintageIndie.wav";
import A8 from "../sounds/Kick_VintageIndie.wav";

export const GridContext = createContext();

class GridContextProvider extends Component {
  state = {
    drumKit: new Tone.Sampler(
      {
        A1,
        A2,
        A3,
        A4,
        A5,
        A6,
        A7,
        A8
      },
      {}
    ).toMaster(),
    sequence: {},
    instruments: {
      A1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      A2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      A3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      A4: [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0],
      A5: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      A6: [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
      A7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      A8: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0]
    },
    instrumentLabels: {
      A1: "Ride bell",
      A2: "Ride",
      A3: "Hihat Open",
      A4: "Hihat Closed",
      A5: "Snare",
      A6: "Rim Click",
      A7: "Tom",
      A8: "Kick"
    },
    bpm: 100,
    currentDivision: -1
  };

  componentDidMount = () => {
    this.sequence = new Tone.Sequence(
      (_, index) => {
        for (let instrument of Object.keys(this.state.instrumentLabels)) {
          if (this.state.instruments[instrument][index]) {
            this.playNote(instrument);
          }
        }
        this.setDivision();
      },
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "16n"
    ).start(0);
  };

  playNote = instrument => {
    this.state.drumKit.triggerAttack(instrument);
    if (instrument === "A4") this.state.drumKit.triggerRelease("A3");
  };

  setGrid = (note, instrument) => {
    const newState = this.state;
    newState.instruments[instrument][note] = !this.state.instruments[
      instrument
    ][note];
    this.setState({ newState });
    this.playNote(instrument);
  };

  setBpm = newBpm => {
    const newState = this.state;
    newState.bpm = newBpm;
    this.setState({ newState });
    Tone.Transport.bpm.value = newBpm;
  };

  setDivision = (num = this.state.currentDivision) => {
    this.setState({ currentDivision: (num + 1) % 16 });
  };

  render() {
    return (
      <GridContext.Provider
        value={{
          ...this.state,
          setGrid: this.setGrid,
          setBpm: this.setBpm,
          setDivision: this.setDivision,
          playNote: this.playNote
        }}
      >
        {this.props.children}
      </GridContext.Provider>
    );
  }
}

export default GridContextProvider;
