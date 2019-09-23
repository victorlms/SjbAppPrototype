import React,{Component} from 'react';
import Login from './Login';
import Agenda from '../Pages/Agenda';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  Agenda:{screen:Agenda},

})

export default createAppContainer(TabNavigator);
