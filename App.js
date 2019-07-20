import React, { Component } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux/configureStore";
import AppContainer from "./components/AppContainer";
import { I18nManager as RNI18nManager } from "react-native";
import i18n from "./services/i18n";

const { persistor, store } = configureStore();

class App extends Component {
  state = {
    isLoadingComplete: false,
    isI18nInitialized: false
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
      }),
      this._loadAysncLocalization()
    ]);
  };

  _loadAysncLocalization = () => {
    return new Promise((resolve, reject) => {
      i18n
        .init()
        .then(() => {
          const RNDir = RNI18nManager.isRTL ? "RTL" : "LTR";
          // RN doesn't always correctly identify native
          // locale direction, so we force it here.
          if (i18n.dir !== RNDir) {
            const isLocaleRTL = i18n.dir === "RTL";
            RNI18nManager.forceRTL(isLocaleRTL);
            // RN won't set the layout direction if we
            // don't restart the app's JavaScript.
            Updates.reloadFromCache();
          }
          resolve();
        })
        .catch(error => reject(error));
    });
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
