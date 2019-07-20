import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import ActionTabNavigation from "../../navigation/ActionNavigation";
import WebScreen from "../../screens/WebScreen";
import { t } from "../../services/i18n";

const { width, height } = Dimensions.get("window");
class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} hidden={false} />
        <View style={styles.head}>
          <View style={styles.navi}>
            <Ionicons
              style={styles.dummy}
              name="md-bicycle"
              size={32}
              color="#193AB7"
            />
            <Text style={styles.title}>{t("head:title")}</Text>
            <WebScreen style={styles.official} />
          </View>
        </View>
        <View style={styles.actionContainer}>
          <ActionTabNavigation />
        </View>
        {/* <View style={styles.advertising}>
          <Text>Advertising area</Text>
        </View> */}
      </View>
    );
  }
}

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height
  },
  head: {
    flex: 2,
    paddingBottom: 10,
    backgroundColor: "#3E99EE",
    alignItems: "center",
    justifyContent: "flex-end",
    width
  },
  dummy: {
    flex: 1,
    textAlign: "right"
  },
  title: {
    flex: 2,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "600"
  },
  official: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center"
  },
  navi: {
    flexDirection: "row",
    width
  },
  actionContainer: {
    flex: 12,
    justifyContent: "flex-start",
    width
  },
  advertising: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width
  }
});
