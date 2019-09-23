import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import TabNavigator from './src/components/TabNavigator';

export default class App extends Component {
  render() {
    return (
      <TabNavigator />
    )
  }
}

AppRegistry.registerComponent('sjb', () => App);
