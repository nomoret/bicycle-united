import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import FavoriteScreen from "../screens/FavoriteScreen";
import TimerScreen from "../screens/TimerScreen";
import MapScreen from "../screens/MapScreen";
import { Ionicons } from "@expo/vector-icons";

const ActionTabNavigation = createBottomTabNavigator(
  {
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Ionicons
              name={focused ? "ios-star" : "ios-star-outline"}
              size={30}
              color={focused ? "black" : "gray"}
            />
          );
        }
      }
    },
    Timer: {
      screen: TimerScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Ionicons
              name={"ios-timer"}
              size={30}
              color={focused ? "black" : "gray"}
            />
          );
        }
      }
    },
    Map: {
      screen: MapScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Ionicons
              name={focused ? "ios-map" : "ios-map"}
              size={30}
              color={focused ? "black" : "gray"}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);

export default createAppContainer(ActionTabNavigation);
