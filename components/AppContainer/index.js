import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppContainer from "./presenter";

const mapStateToProps = state => {
  const {
    user: { isLoggedIn }
  } = state;
  return {
    isLoggedIn
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
