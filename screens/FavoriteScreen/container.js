import React, { Component } from "react";
import FavoriteScreen from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  static propTypes = {
    removeFavorite: PropTypes.func.isRequired
  };
  render() {
    const { locationList } = this.props;
    return (
      <FavoriteScreen
        locationList={locationList}
        handleDeleteItem={this._handleDeleteItem}
      />
    );
  }

  _handleDeleteItem = number => {
    console.log(number);
    const { removeFavorite } = this.props;
    removeFavorite(number);
  };
}

export default Container;
