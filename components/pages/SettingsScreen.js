import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings Screen",
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="Info"
        color="#333"
      />
    )
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Hello from the Settings Page</Text>
        <Button
          title="Go to John's profile"
          onPress={() =>
            navigation.navigate("Profile", { name: "John", age: "30" })
          }
        />
      </View>
    );
  }
}
