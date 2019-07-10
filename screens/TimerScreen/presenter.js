import React from "react";
import {
  Dimensions,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
const { width } = Dimensions.get("window");

const formatting = time => {
  const minute = Math.floor(time / 60);
  const second = time % 60;
  console.log(minute, second);
  const represent = `${minute < 10 ? `0${minute}` : `${minute}`}:${
    second < 10 ? `0${second}` : `${second}`
  }`;
  return represent;
};

const TimerScreen = props => {
  const { time, handlePlay, resetCount, timerPopUp } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer Screen</Text>
      <Text style={styles.format}>{formatting(time)}</Text>
      <View style={styles.actions}>
        {props.isPlaying ? (
          <TouchableOpacity style={styles.btn} onPress={resetCount}>
            <Text style={styles.btnText}>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={handlePlay}>
            <Text style={styles.btnText}>Play</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={timerPopUp}>
        <Text style={{ color: "#1e88e5" }}>Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 30
  },
  format: {
    fontSize: 60
  },
  actions: {
    marginTop: 10,
    alignContent: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0d47a1"
  },
  btn: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 30,
    width: 60,
    height: 60
  },
  btnText: {
    color: "#3E99EE"
  }
});

export default TimerScreen;
