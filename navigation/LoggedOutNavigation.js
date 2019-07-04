import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";

const LoggedOutNavigation = createStackNavigator({
  LogIn: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Log In"
    }
  }
});

// export default LoggedOutNavigation;
export default createAppContainer(LoggedOutNavigation);
