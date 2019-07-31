import React, { Component } from "react";
import { View, Text, Animated } from "react-native";
import { Button, Icon } from "react-native-elements";

export class ElementsScreen extends Component {
  static navigationOptions = {
    title: "React Native Elements",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View>
        <Button title="solid button" />

        <Button title="Outline button" type="outline" />

        <Button title="Clear button" type="clear" />

        <Button
          icon={<Icon name="arrow-back" size={15} color="white" />}
          title="Button with icon component"
        />

        <Button
          icon={{
            name: "arrow-drop-down",
            size: 15,
            color: "white"
          }}
          title="Button with icon object"
        />

        <Button
          icon={<Icon name="arrow-forward" size={15} color="white" />}
          iconRight
          title="Button with right icon"
        />

        <Button title="Loading button" loading />
      </View>
    );
  }
}

export default ElementsScreen;
