import React, { Component, createContext } from "react";

import Tone, { Transport, Time, Sampler, Draw } from "tone";

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
  constructor() {
    super();

    const reverb = new Tone.Reverb().toMaster();
    reverb.generate().then(() => {});
    reverb.wet.value = 0;
    reverb.decay = 0;
    reverb.preDelay = 0;

    const delay = new Tone.FeedbackDelay("16n", 0.2).toMaster();
    delay.wet.value = 0;
    delay.delayTime.value = 0;
    delay.feedback.value = 0;

    this.effects = {
      reverb,
      delay
    };

    this.state = {
      drumKit: new Sampler({ A1, A2, A3, A4, A5, A6, A7, A8 }, {})
        .connect(reverb)
        .connect(delay)
        .toMaster(),
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
      currentDivision: -1,
      mouseDown: false,
      edit: 0,
      loopId: null,
      loopLength: "1m",
      currentEffect: 0,
      effects: ["reverb", "delay"]
    };
  }

  componentDidMount = () => {
    window.addEventListener("mousedown", () => {
      this.setState({ mouseDown: true });
    });
    window.addEventListener("mouseup", () => {
      this.setState({ mouseDown: false });
    });

    this.createLoop(this.state.loopLength);
  };

  setContextState = (property, val) => {
    this.setState({ [property]: val });
  };

  createLoop = length => {
    Transport.loop = true;
    Transport.loopEnd = length;
    Transport.clear(this.state.loopId);
    const loop = time => {
      this.draw(time);
      for (let instrument in this.state.instruments) {
        this.state.instruments[instrument].forEach((note, i) => {
          if (note) this.scheduleNote(instrument, time + i * Time("16n").toSeconds());
        });
      }
    };
    const loopId = Transport.schedule(loop, "0");
    this.setState({ loopId });
  };

  scheduleNote = (instrument, time) => {
    this.state.drumKit.triggerAttack(instrument, time);
    if (instrument === "A4") this.state.drumKit.triggerRelease("A3", time);
  };

  playNote = instrument => {
    this.state.drumKit.triggerAttack(instrument);
    if (instrument === "A4") this.state.drumKit.triggerRelease("A3");
  };

  draw = time => {
    for (let i = 0; i < 16; i++) {
      Draw.schedule(() => {
        this.setDivision(i);
      }, time + i * Time("16n").toSeconds());
    }
  };

  setGrid = (note, instrument, edit = false) => {
    if (!this.state.instruments[instrument][note] && edit !== "0") this.playNote(instrument);
    const newState = this.state;
    const newVal = edit ? +edit : !this.state.instruments[instrument][note];
    newState.instruments[instrument][note] = newVal;
    this.setState({ newState });
  };

  editGrid = (edit, note, instrument) => {
    this.setGrid(note, instrument, edit);
  };

  toggleEditMode = mode => {
    const newVal = mode === this.state.edit ? 0 : mode;
    this.setState({ edit: newVal });
  };

  setBpm = newBpm => {
    const newState = this.state;
    newState.bpm = newBpm;
    this.setState({ newState });
    Transport.bpm.value = newBpm;
  };

  setDivision = (num = this.state.currentDivision) => {
    this.setState({ currentDivision: num });
  };

  clearAll = () => {
    for (const instrument in this.state.instruments) {
      if (this.state.instruments.hasOwnProperty(instrument)) {
        this.state.instruments[instrument].fill(0, 0);
      }
    }
    this.setState({ edit: this.state.edit });
  };

  capNum(num, min, max) {
    if (num > max) return max;
    if (num < min) return min;
    return num;
  }

  setEffectParam = (effect, param, val) => {
    try {
      this.effects[effect][param].value = val;
    } catch {
      this.effects[effect][param] = val;
    }
  };

  getEffectParam = (effect, param) => {
    try {
      return this.effects[effect][param].value;
    } catch {
      return this.effects[effect][param];
    }
  };

  render() {
    return (
      <GridContext.Provider
        value={{
          ...this.state,
          setGrid: this.setGrid,
          setBpm: this.setBpm,
          setDivision: this.setDivision,
          playNote: this.playNote,
          editGrid: this.editGrid,
          toggleEditMode: this.toggleEditMode,
          clearAll: this.clearAll,
          createLoop: this.createLoop,
          capNum: this.capNum,
          setEffectParam: this.setEffectParam,
          getEffectParam: this.getEffectParam,
          setContextState: this.setContextState
        }}
      >
        {this.props.children}
      </GridContext.Provider>
    );
  }
}

export default GridContextProvider;
