import React, { Component, createContext } from "react";

export const GridContext = createContext();


class GridContextProvider extends Component {
    state = {
        instruments: {
            A1: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0],
            A2: [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
            A3: [1,0,0,0, 0,0,0,1, 1,0,0,0, 0,0,0,0],
            A4: [1,0,0,0, 0,0,0,1, 1,0,0,0, 0,0,0,0],
            A5: [1,0,0,0, 0,0,0,1, 1,0,0,0, 0,0,0,0],
            A6: [1,0,0,0, 0,0,0,1, 1,0,0,0, 0,0,0,0]
        }
    }

    setGrid = (note, instrument) => {
        const newState = this.state;
        newState.instruments[instrument][note] = !this.state.instruments[instrument][note];
        this.setState({newState})
    }

    render() {
        return(
        <GridContext.Provider value={{...this.state, setGrid: this.setGrid }}>
            {this.props.children}
        </GridContext.Provider>
        );
    }
}

export default GridContextProvider;
