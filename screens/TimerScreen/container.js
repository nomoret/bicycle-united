import React, { Component } from "react";
import TimerScreen from "./presenter";
import { Alert } from "react-native";
import { t } from "../../services/i18n";

const TIMER_NUMBER = 60 * 55;

class Container extends Component {
  state = {
    time: TIMER_NUMBER,
    isPlaying: false
  };

  static getDerivedStateFromProps(state) {
    console.log(state);

    if (state.time === 0) {
      clearInterval(state.timeInteval);
      setTimeout(() => {
        Alert.alert(
          t("timer:warnning"),
          t("timer:warnningContent"),
          [{ text: t("alert:ok"), onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }, 1000);
      return { isPlaying: false, time: TIMER_NUMBER };
    } else {
      return null;
    }
  }

  render() {
    return (
      <TimerScreen
        time={this.state.time}
        isPlaying={this.state.isPlaying}
        handlePlay={this._handlePlay}
        resetCount={this._resetCount}
        timerPopUp={this._timerPopUp}
      />
    );
  }

  componentWillUnmount() {
    console.log("unmount");
    if (this.state.isPlaying) {
      this.setState({
        isPlaying: false,
        time: TIMER_NUMBER
      });
      clearInterval(this.state.timeInteval);
    }
  }

  _handlePlay = () => {
    if (!this.state.isPlaying) {
      const timeInteval = setInterval(() => {
        const { time } = this.state;
        this.setState({ time: time - 1 });
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
        time: TIMER_NUMBER
      });
      clearInterval(this.state.timeInteval);
    }
  };

  _timerPopUp = () => {
    Alert.alert(
      t("timer:warnning"),
      t("timer:warnningContent"),
      [{ text: t("alert:ok"), onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };
}

export default Container;
