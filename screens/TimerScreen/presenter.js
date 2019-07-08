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
  const represent = time < 10 ? `0${time}:00:00` : `${time}:00:00`;
  return represent;
};

const TimerScreen = props => {
  const { time, handlePlay, resetCount, timerPopUp } = props;
  return (
    <View style={styles.container}>
      <Text>Timer Screen</Text>
      <Text>{formatting(time)}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn} onPress={handlePlay}>
          <Text style={styles.btnText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={resetCount}>
          <Text style={styles.btnText}>Stop</Text>
        </TouchableOpacity>
      </View>
      <Button style={styles.btn} title="alert" onPress={timerPopUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    width
  },
  btn: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    color: "#3E99EE"
  }
});

export default TimerScreen;
