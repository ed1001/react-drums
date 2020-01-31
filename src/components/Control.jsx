import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App";

export default class Control extends React.Component {
  render() {
    return (
      <div className="control symbol-container" onClick={() => this.props.action()}>
        <FontAwesomeIcon icon={this.props.symbol} className="control-symbol symbol" />
      </div>
    );
  }
}
