import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import AlramScreen from "../screens/AlramScreen";
import MapScreen from "../screens/MapScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

const ActionTabNavigation = createBottomTabNavigator({
  Favorite: FavoriteScreen,
  Alram: AlramScreen,
  Map: MapScreen
});

export default createAppContainer(ActionTabNavigation);
