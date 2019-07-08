import React, { Component } from "react";
import TimerScreen from "./presenter";

class Container extends Component {
  state = {
    time: 55,
    isPlaying: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log(state);
    if (state.time === 0) {
      clearInterval(state.timeInteval);
      return { isPlaying: false, time: 3 };
    } else {
      return null;
    }
  }

  render() {
    return (
      <TimerScreen
        time={this.state.time}
        handlePlay={this._handlePlay}
        resetCount={this._resetCount}
        timerPopUp={this._timerPopUp}
      />
    );
  }

  _handlePlay = () => {
    if (!this.state.isPlaying) {
      const timeInteval = setInterval(() => {
        const { time } = this.state;
        // if (time - 1 < 0) {
        //   this.setState({ time: 0 });
        // } else {
        this.setState({ time: time - 1 });
        // }
      }, 1000);

      this.setState({
        isPlaying: true,
        timeInteval
      });
    }
  };

  _resetCount = () => {
    if (this.state.isPlaying) {
      this.setState({
        isPlaying: false,
        time: 3
      });
      clearInterval(this.state.timeInteval);
    }
  };

  _timerPopUp = () => {
    console.log("click alret btn");
    alert("alert");
  };
}

export default Container;
