import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import  Login from "./src/components/loginView";
import  Dash from "./src/components/dashboardView";
//Para la navegacion se siguio esta guia: 
//https://facebook.github.io/react-native/docs/navigation.html
//Libreria : 
//https://reactnavigation.org


 const RootStack = createStackNavigator({
  Login: {
    screen: Login
  },
  Dash: {
    screen: Dash
  }
});

export default RootStack