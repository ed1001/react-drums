import React from "react";
import ReactDOM from "react-dom";

import SoundContextProvider from "./contexts/SoundContext";
import "../src/style/App.scss";

import Box from "./components/Box";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faStop, faPause, faVolumeUp, faEraser, faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faStop, faPause, faVolumeUp, faEraser, faPencilAlt, faTrashAlt);

export default function App() {
  return (
    <SoundContextProvider>
      <Box />
    </SoundContextProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
