import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const AlramScreen = props => {
  const { time, handlePlay, resetCount, alaramPopUp } = props;
  return (
    <View style={style.container}>
      <Text>Timer Screen</Text>
      <Text>Start Count</Text>
      <Text>{`${time}`}</Text>
      <View style={style.actions}>
        <Button title="play" onPress={handlePlay} />
        <Button title="stop" onPress={resetCount} />
      </View>
      <Button title="alert" onPress={alaramPopUp} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  actions: {
    flexDirection: "row"
  }
});

export default AlramScreen;
