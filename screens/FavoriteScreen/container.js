import React, { Component } from "react";
import FavoriteScreen from "./presenter";

class Container extends Component {
  state = {
    data: [
      {
        title: "zamsil station",
        data: [
          {
            number: 1234,
            usableCount: 5,
            entireCount: 20
          }
        ]
      },
      {
        title: "songpa station",
        data: [
          {
            number: 4321,
            usableCount: 10,
            entireCount: 30
          }
        ]
      },
      {
        title: "대흥동 성심당",
        data: [
          {
            number: 777,
            usableCount: 10,
            entireCount: 30
          }
        ]
      }
    ]
  };

  render() {
    return (
      <FavoriteScreen
        data={this.state.data}
        handleDeleteItem={this._handleDeleteItem}
      />
    );
  }

  _handleDeleteItem = number => {
    const updatedData = this.state.data.filter(
      item => item.data[0].number != number
    );

    this.setState({
      data: updatedData
    });
  };
}

export default Container;
