import React, { Component } from "react";
import AlramScreen from "./presenter";

class Container extends Component {
  state = {
    time: 55
  };

  render() {
    return (
      <AlramScreen
        time={this.state.time}
        handlePlay={this._handlePlay}
        resetCount={this._resetCount}
        alaramPopUp={this._alaramPopUp}
      />
    );
  }

  _handlePlay = () => {
    const { time } = this.state;
    if (time - 1 < 0) {
      this.setState({ time: 0 });
    } else {
      this.setState({ time: time - 1 });
    }
  };

  _resetCount = () => this.setState({ time: 55 });

  _alaramPopUp = () => {
    console.log("click alret btn");
    alert("alert");
  };
}

export default Container;
