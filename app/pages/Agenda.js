import React, {Component} from 'react';
import {
  View,
  FlatList,
  Picker,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

var language;
var data = [
  {title: 1, key: 'a'},
  {title: 2, key: 'b'},
  {title: 3, key: 'c'},
  {title: 4, key: 'd'},
  {title: 5, key: 'e'},
];

export default class Agenda extends Component {
  constructor(props) {
    super(props);
  }

  renderItem(item, index) {
    return item.title == 1 ? (
      <View style={styles.pickContainer}>
        <Image
          style={styles.leftImage}
          source={require('../assets/agenda/item1.png')}
        />
        <Text>4º Festival</Text>
      </View>
    ) : item.title === 2 ? (
      <View style={styles.pickContainer}>
        <Image
          style={styles.leftImage}
          source={require('../assets/agenda/item2.png')}
        />
        <Text>Passeata</Text>
      </View>
    ) : item == 3 ? (
      <View style={styles.pickContainer}>
        <Image
          style={styles.leftImage}
          source={require('../assets/agenda/item3.png')}
        />
        <Text>Último dia</Text>
      </View>
    ) : item === 4 ? (
      <View style={styles.pickContainer}>
        <Image
          style={styles.leftImage}
          source={require('../assets/agenda/item4.png')}
        />
        <Text>Degustação</Text>
      </View>
    ) : (
      <View
        style={{
          ...styles.pickContainer,
          height: 130,
          marginBottom:1,
          backgroundColor: '#FFF',
          padding: 12,
        }}>
        <Image
          style={styles.leftImage}
          source={require('../assets/agenda/item5.png')}
        />
        <Text style={styles.listText}>Início da votações para prefeito</Text>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontFamily: 'helvetica',
              fontWeight: 'bold',
              color: '#828282',
            }}>
            16
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 'bold',
              color: '#828282',
            }}>
            ----
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 'bold',
              color: '#828282',
            }}>
            AGO
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{width: '100%'}}>
        <View style={styles.pickContainer}>
          <Picker style={styles.pick} selectedValue={[]}>
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2018" value="2018" />
          </Picker>
          <TouchableOpacity style={{height: 40, flex: 1}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../assets/agenda/menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList data={data} renderItem={this.renderItem}></FlatList>
        </View>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundColor: 'lightgray',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickContainer: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    backgroundColor: '#FF4500',
  },
  pick: {
    flex: 5,
  },
  leftImage: {
    margin: 10,
    width: 60,
    height: 60,
    flex: 1.5,
  },
  listText: {
    flex: 5,
    fontWeight: '100',
    marginLeft: 5,
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
});
