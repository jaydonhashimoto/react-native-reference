import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import HomeScreen from './components/pages/HomeScreen';
import ProfileScreen from './components/pages/ProfileScreen';
import ModalScreen1 from './components/ModalScreen1';
import ModalScreen2 from './components/ModalScreen2';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainNavigator
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
    mode: 'modal',
    headerMode: 'none'
  }
);

const App = createAppContainer(RootStack);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
