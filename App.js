import React, { Component } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class App extends Component {
  state = {
    isLoadingComplete: false,
    count: 0
  };

  render() {
    const { isLoadingComplete } = this.state;

    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <View />
          <Text>Counter</Text>
          <Text>Click add the count</Text>
          <Text>{`${this.state.count}`}</Text>
          <View style={styles1.actions}>
            <Button title="add" onPress={this._addCount} />
            <Button title="reset" onPress={this._resetCount} />
          </View>
          <Button
            title="alert"
            onPress={() => {
              console.log("click alret btn");
              alert("alert");
            }}
          />
        </View>
      );
    }
  }

  _loadAssetsAsync = () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/icon.png"),
        require("./assets/splash.png")
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font
      })
    ]);
  };

  _handleLoadingError = e => {
    console.log(e);
  };

  _handleFinishLoading = e => {
    this.setState({
      isLoadingComplete: true
    });
  };

  _addCount = () => this.setState({ count: this.state.count + 1 });

  _resetCount = () => this.setState({ count: 0 });
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  }
});

export default createAppContainer(AppNavigator);

const styles1 = StyleSheet.create({
  actions: {
    flexDirection: "row"
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
