import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
// import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";
import ActionNavigation from "../../navigation/ActionNavigation";
import WebScreen from "../../screens/WebScreen";

const { width, height } = Dimensions.get("window");
class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };

  render() {
    const { isLoggedIn } = this.props;
    console.log(isLoggedIn);

    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} hidden={false} />
        <View style={styles.head}>
          <View style={styles.navi}>
            <Text style={styles.title}>Where is Bike?</Text>
            <WebScreen />
          </View>
        </View>
        <View style={styles.actionContainer}>
          <ActionNavigation />
        </View>
        <View style={styles.advertising}>
          <Text>Advertising area</Text>
        </View>
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
    backgroundColor: "#3E99EE",
    alignItems: "center",
    justifyContent: "center",
    width
  },
  title: {
    flexGrow: 1,
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "right",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  official: {
    justifyContent: "center"
  },
  navi: {
    // flex: 1,
    flexDirection: "row",
    width
  },
  actionContainer: {
    flex: 8,
    paddingTop: 20,
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
