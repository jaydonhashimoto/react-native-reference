import React, { Fragment } from 'react';
import { Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Fragment>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', { name: 'Jane', age: '23' })}
        />
        <Button
          onPress={() => navigate('Modal1')}
          title="Info Modal"
          color="#333"
        />
      </Fragment>
    );
  }
}
