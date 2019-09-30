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
import Swiper from 'react-native-swiper';

var language;
var data = [
  {title: 1, key: 'a'},
  {title: 2, key: 'b'},
  {title: 3, key: 'c'},
  {title: 4, key: 'd'},
  {title: 5, key: 'e'},
];

export default class Calendario extends Component {
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
          marginBottom: 1,
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
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              fontWeight: 'bold',
              flex: 4,
              padding: 10,
            }}>
            O que procura?
          </Text>
          <TouchableOpacity style={{height: 40, flex: 1}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../assets/agenda/menu.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: "100%", height: "5%",zIndex: 999, justifyContent: "space-between", flexDirection: "row"}}>
          <View style={{flex:1}}>
            <Text style={{fontSize: 40, fontWeight: "bold", marginHorizontal: 20, marginTop:10}}>Hoje</Text>
          </View>
          <View >
            <Text style={{fontSize: 18, fontWeight: "bold", color: "#d9002f", marginHorizontal:10, marginTop: 10}}>04 / 08 / 2019</Text>
            <Text style={{fontSize: 18, fontWeight: "bold", color: "#d9002f", paddingLeft: 45}}>Domingo</Text>
          </View>
        </View>
        <View style={{height: '35%'}}>
          <Swiper
            scrollEnabled={true}
            ref={ref => (this.swiper = ref)}
            style={globalStyles.containerCenterFlex}
            loop={false}
            showsButtons={false}
            showsPagination={true}>
            <View
              style={{
                ...globalStyles.containerCenterFlex,
              }}>
              <Text
                style={{
                  position: 'absolute',
                  zIndex: 9999,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#FFF',
                  paddingTop: 200,
                }}>
                #FestivalJulinoDoAçu
              </Text>
              <Image
                source={require('../assets/eventos/event-item.png')}
                resizeMode="stretch"
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <View
              style={{
                ...globalStyles.containerCenterFlex,
                backgroundColor: '#0F0',
              }}>
              <Text>Texto 1</Text>
            </View>
            <View
              style={{
                ...globalStyles.containerCenterFlex,
                backgroundColor: '#0F0',
              }}>
              <Text>Texto 2</Text>
            </View>
          </Swiper>
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
    backgroundColor: '#d9002f',
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
