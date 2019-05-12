'use strict';
import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid, Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ThemeProvider, Input, Button } from 'react-native-elements';

// clasess
class LoginPage extends React.Component {
 constructor(props) {
   super(props);
   this.state = { text: 'Username' }
 }

  render() {
    return (
      <ThemeProvider style={{ flex: 1, flexDirection: 'column' }}>
        <Input placeholder='username' label='username' />
        <Input placeholder='password' label='password' secureTextEntry={true} />
        <View style={{ height: 20 }}></View>
        <Button title='Login' type='solid' />
      </ThemeProvider>
    );
  }
}


class MainPage extends React.Component {
  static navigationOptions = {
    headerTitle: <Text style={{ fontSize: 24, paddingLeft: 10 }}>Login</Text>,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ height: 100 }}></View>
        <LoginPage></LoginPage>
      </View>
    );
  }
}

// STYLES
const styles = StyleSheet.create({
  topMenu: {
    backgroundColor: '#666',
  },
});

// STACK NAVIGATION
const App = createStackNavigator({
  Home: { screen: MainPage }
});

// export default the App class
export default createAppContainer(App);
