import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile Screen",
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
        <Text>Hello from the Profile Page</Text>
        {/* 'no name is the fallback value if name isn't available */}
        <Text>{navigation.getParam("name", "no name")}</Text>
        <Text>{navigation.getParam("age", "no age")}</Text>
        <Button
          onPress={() => navigation.navigate("Modal2")}
          title="About Modal"
          color="green"
        />
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
