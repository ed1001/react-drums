import React from "react";

import "../App";

export default class Note extends React.Component {
  render() {
    return <div className="note" onClick={() => this.props.setGrid()}></div>;
  }
}
