import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import FavoriteScreen from "../screens/FavoriteScreen";
import TimerScreen from "../screens/TimerScreen";
import MapScreen from "../screens/MapScreen";

const ActionTabNavigation = createBottomTabNavigator({
  Favorite: FavoriteScreen,
  Alram: TimerScreen,
  Map: MapScreen
});

export default createAppContainer(ActionTabNavigation);
