import React from 'react';
import ReactDOM from "react-dom";

import GridContextProvider from "./contexts/GridContext"
import './App.css';

import Box from "./components/Box"

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faStop, faPause} from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faStop, faPause);


export default function App () {
  return (
    <GridContextProvider>
      <Box />
    </GridContextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
