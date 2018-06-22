import {YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Login from "./src/components/loginView";
import TapNav from "./src/components/tapNav";
//Para la navegacion se siguio esta guia: 
//https://facebook.github.io/react-native/docs/navigation.html
//Libreria : 
//https://reactnavigation.org


const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    TapNav: {
      screen: TapNav
    }
  },
  {
    initialRouteName:'Login'
  }
  
);
export default RootStack