import React, {Component} from 'react';
import {View, Picker, Stylesheet} from 'react-native';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';

export default class Agenda extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View>
          <Picker selectedValue={this.state.language}>
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2018" value="2018" />
          </Picker>
        </View>

        <View>
          <FlatList data={[{key: teste}]}></FlatList>
        </View>
      </View>
    );
  }
}
