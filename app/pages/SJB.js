import React, {Component} from 'react';
import {StyleSheet, FlatList, Picker, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import globalStyles from '../styles';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import Agenda from './Agenda';
import Destaque from './Destaque';
import Calendario from './Calendario';

const tabs = [
  {
    key: 'book',
    icon: 'book',
    label: '',
    barColor: '#FF4500',
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
  {
    key: 'map',
    icon: 'map',
    label: '',
    barColor: '#388E3C',
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
  {
    key: 'news',
    icon: 'speaker-notes',
    label: '',
    barColor: '#0013a3',
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
  {
    key: 'calendar',
    icon: 'calendar-today',
    label: '',
    barColor: '#d9002f',
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
  {
    key: 'trend',
    icon: 'fireplace',
    label: '',
    barColor: '#ffc800',
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
];

export default class SJB extends Component {
  constructor(props) {
    super(props);
  }

  activeTab = tabs[0].key;

  renderIcon = icon => ({isActive}) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({tab, isActive}) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  setTab = ({key}) => {
    const actualIndex = tabs.findIndex(el => el.key === this.activeTab);
    const nextIndex = tabs.findIndex(el => el.key === key);

    this.swiper.scrollBy(nextIndex - actualIndex);
    this.activeTab = key;
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper
          scrollEnabled={false}
          ref={ref => (this.swiper = ref)}
          style={globalStyles.containerCenterFlex}
          loop={false}
          showsButtons={false}
          showsPagination={false}>
          <Agenda />
          <View
            style={{
              ...globalStyles.containerCenterFlex,
              backgroundColor: '#0F0',
            }}>
            <Text style={globalStyles.title}>Movie</Text>
          </View>
          
          <Destaque />
          <Calendario/>
          <View
            style={{
              ...globalStyles.containerCenterFlex,
              backgroundColor: '#0F0',
            }}>
            <Text style={globalStyles.title}>MUsic</Text>
          </View>
        </Swiper>
        <BottomNavigation
          ref={ref => (this.bottomNav = ref)}
          style={{width: '100%'}}
          onTabPress={this.setTab}
          renderTab={this.renderTab}
          tabs={tabs}
          useLayoutAnimation
        />
      </View>
    );
  }
}
