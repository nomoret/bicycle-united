import React from "react";
import { View, StyleSheet } from "react-native";

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#E4E4E4"
  }
});

export default Separator;
