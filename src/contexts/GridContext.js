import React, { Component, createContext } from "react";

export const GridContext = createContext();


class GridContextProvider extends Component {
    state = {
        instruments: {
            A1: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
            A2: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
            A3: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
            A4: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
            A5: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
            A6: [0,0,0,0, 0,0,1,0, 1,0,0,1, 0,0,1,0],
            A7: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0],
            A8: [1,0,0,0, 0,0,0,1, 1,0,0,0, 0,0,0,0]
        },
        bpm: 120,
    }

    setGrid = (note, instrument) => {
        const newState = this.state;
        newState.instruments[instrument][note] = !this.state.instruments[instrument][note];
        this.setState({newState})
    }

    setBpm = (newBpm) => {
        const newState = this.state;
        newState.bpm = newBpm;
        this.setState({newState})
    }

    render() {
        return(
        <GridContext.Provider value={{...this.state, setGrid: this.setGrid, setBpm: this.setBpm }}>
            {this.props.children}
        </GridContext.Provider>
        );
    }
}

export default GridContextProvider;
