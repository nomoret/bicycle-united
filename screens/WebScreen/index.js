import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { t } from "../../services/i18n";

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
        <Text style={styles.content}>{t("head:officialSite")}</Text>
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
    flex: 1,
    textAlign: "right",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    color: "white"
  }
});
