import React from "react";

import { SoundContext } from "../contexts/SoundContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App";

export default class Edit extends React.Component {
  static contextType = SoundContext;

  state = {
    active: false
  };

  render() {
    return (
      <div
        className={"edit symbol-container"}
        onClick={() => {
          if (this.props.edit === "clear") {
            this.context.clearAll();
            return;
          } else if (this.props.edit === "2") {
            this.context.setVelocity();
            return;
          }
          this.context.toggleEditMode(this.props.edit);
          this.setState({ active: !this.state.active });
        }}
      >
        <FontAwesomeIcon
          icon={this.props.symbol}
          className={`edit-symbol symbol ${this.context.edit === this.props.edit ? "edit-active" : ""}`}
        />
      </div>
    );
  }
}
