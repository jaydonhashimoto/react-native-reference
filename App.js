import { StyleSheet } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import HomeScreen from "./components/pages/HomeScreen";
import ProfileScreen from "./components/pages/ProfileScreen";
import ModalScreen1 from "./components/ModalScreen1";
import ModalScreen2 from "./components/ModalScreen2";
import SettingsScreen from "./components/pages/SettingsScreen";
import ElementsScreen from "./components/pages/ElementsScreen";

const MainStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Elements: { screen: ElementsScreen }
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Profile: { screen: ProfileScreen }
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen
});

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: "rgba(255,255,255,.9)",
    overlayColor: "#6b52ae",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#6b52ae"
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Modal1: {
      screen: ModalScreen1
    },
    Modal2: {
      screen: ModalScreen2
    }
  },
  {
    // modal specifies how the screen will open
    mode: "modal",
    headerMode: "none"
  }
);

//stack navigator with modals
// const App = createAppContainer(RootStack);

//navigator with drawer component
// const App = createAppContainer(DrawerNavigator);

//nest stack containers in tab navigator
const App = createAppContainer(
  createBottomTabNavigator(
    {
      Home: MainStack,
      Settings: SettingsStack
    },
    {
      /* Other configuration remains unchanged */
    }
  )
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
