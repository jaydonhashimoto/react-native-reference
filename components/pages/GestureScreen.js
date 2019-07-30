import React, { Component } from "react";
import { View, Text, Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
// import { GestureHandler } from "expo";
// const { Swipeable } = GestureHandler;

export class GestureScreen extends Component {
  static navigationOptions = {
    title: "React Native Gesture Handler",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });
    return (
      <View
        onPress={this.close}
        style={{
          transform: [{ transform: trans }]
        }}
      >
        <Animated.Text>Archive</Animated.Text>
      </View>
    );
  };

  render() {
    return (
      <View>
        <Swipeable renderLeftActions={this.renderLeftActions}>
          ><Text>Hello</Text>
        </Swipeable>
      </View>
    );
  }
}

export default GestureScreen;
