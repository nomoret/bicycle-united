import React, { Component } from "react";
import LoginScreen from "./presenter";

class Container extends Component {
  render() {
    console.log("LoginScreen");
    return <LoginScreen />;
  }
}

export default Container;
