import React from 'react';
import { Button, View, Text } from 'react-native';
export default class ModalScreen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>About Modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack(null)}
          title="Dismiss"
        />
      </View>
    );
  }
}
