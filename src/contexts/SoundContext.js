import React, { Component, createContext, useState } from "react";

import Tone, { Transport, Time, Sampler, Draw } from "tone";

import A1 from "../sounds/RideBell_VintageIndie.wav";
import A2 from "../sounds/Ride_VintageIndie.wav";
import A3 from "../sounds/HiHatOpen_VintageIndie.wav";
import A4 from "../sounds/HiHatClosed_VintageIndie.wav";
import A5 from "../sounds/Snare_VintageIndie.wav";
import A6 from "../sounds/XStick_VintageIndie.wav";
import A7 from "../sounds/Tom_VintageIndie.wav";
import A8 from "../sounds/Kick_VintageIndie.wav";

export const SoundContext = createContext();

class SoundContextProvider extends Component {
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

    this.templateArray = new Array(16);
    for (let i = 0; i < 16; i++) {
      this.templateArray[i] = { note: 0, velocity: 0.5 };
    }

    this.state = {
      drumKit: new Sampler({ A1, A2, A3, A4, A5, A6, A7, A8 }, {})
        .connect(reverb)
        .connect(delay)
        .toMaster(),
      sequence: {},
      instruments: {
        A1: JSON.parse(JSON.stringify(this.templateArray)),
        A2: JSON.parse(JSON.stringify(this.templateArray)),
        A3: JSON.parse(JSON.stringify(this.templateArray)),
        A4: JSON.parse(JSON.stringify(this.templateArray)),
        A5: JSON.parse(JSON.stringify(this.templateArray)),
        A6: JSON.parse(JSON.stringify(this.templateArray)),
        A7: JSON.parse(JSON.stringify(this.templateArray)),
        A8: JSON.parse(JSON.stringify(this.templateArray))
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
      loopId: null,
      loopLength: "1m",
      currentEffect: 0,
      effects: ["reverb", "delay"],
      mouseDown: false,
      edit: 0
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
        this.state.instruments[instrument].forEach(({ note, velocity }, i) => {
          if (note) this.scheduleNote(instrument, time + i * Time("16n").toSeconds(), velocity);
        });
      }
    };
    const loopId = Transport.schedule(loop, "0");
    this.setState({ loopId });
  };

  scheduleNote = (instrument, time, velocity) => {
    this.state.drumKit.triggerAttack(instrument, time, velocity);
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

  setBpm = newBpm => {
    const newState = this.state;
    newState.bpm = newBpm;
    this.setState({ newState });
    Transport.bpm.value = newBpm;
  };

  setDivision = (num = this.state.currentDivision) => {
    this.setState({ currentDivision: num });
  };

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

  setGrid = (note, instrument, edit = false) => {
    if (!this.state.instruments[instrument][note].note && edit !== "0") this.playNote(instrument);
    const newState = this.state;
    const newVal = edit ? +edit : !this.state.instruments[instrument][note].note;
    newState.instruments[instrument][note].note = newVal;
    this.setState({ newState });
  };

  editGrid = (note, instrument, edit) => {
    this.setGrid(note, instrument, edit);
  };

  setVelocity = (note, instrument) => {};

  toggleEditMode = mode => {
    const newVal = mode === this.state.edit ? 0 : mode;
    this.setState({ edit: newVal });
  };

  clearAll = () => {
    const newState = this.state;
    for (const instrument in this.state.instruments) {
      if (this.state.instruments.hasOwnProperty(instrument)) {
        newState.instruments[instrument] = JSON.parse(JSON.stringify(this.templateArray));
      }
    }
    this.setState(newState);
  };

  capNum(num, min, max) {
    if (num > max) return max;
    if (num < min) return min;
    return num;
  }

  render() {
    return (
      <SoundContext.Provider
        value={{
          ...this.state,
          setBpm: this.setBpm,
          setDivision: this.setDivision,
          playNote: this.playNote,
          createLoop: this.createLoop,
          setEffectParam: this.setEffectParam,
          getEffectParam: this.getEffectParam,
          setContextState: this.setContextState,
          setGrid: this.setGrid,
          editGrid: this.editGrid,
          toggleEditMode: this.toggleEditMode,
          clearAll: this.clearAll,
          capNum: this.capNum
        }}
      >
        {this.props.children}
      </SoundContext.Provider>
    );
  }
}

export default SoundContextProvider;
