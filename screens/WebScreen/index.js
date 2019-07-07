import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";

const WEB_HOST_NAME = "http://m.tashu.or.kr";
export default class WebScreen extends Component {
  state = {
    result: null
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this._handlePressButtonAsync}
      >
        <Text style={styles.content}>Offical site</Text>
      </TouchableOpacity>
    );
  }

  _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(WEB_HOST_NAME);
    this.setState({ result });
  };
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    color: "white"
  }
});
