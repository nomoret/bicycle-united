import React from "react";
import { View, StyleSheet } from "react-native";

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: 400,
    backgroundColor: "#E4E4E4",
    marginLeft: 15
  }
});

export default Separator;
