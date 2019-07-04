import React, { Component } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux/configureStore";
import AppContainer from "./components/AppContainer";

const { persistor, store } = configureStore();

class App extends Component {
  state = {
    isLoadingComplete: false
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
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
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
}

export default App;
