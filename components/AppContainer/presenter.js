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
            <Text>Where is Bike?</Text>
            <TouchableOpacity>
              <Text>Offical site</Text>
            </TouchableOpacity>
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
  navi: {
    flexDirection: "row"
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
