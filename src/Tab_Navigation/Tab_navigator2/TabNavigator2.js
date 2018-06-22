import React, {Component} from 'react';
import { YellowBox,SafeAreaView } from 'react-native'
import {createMaterialTopTabNavigator} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import HomeSreen from './Screens/HomeScreen'
import SettingScreen from './Screens/SettingScreen'
import ProfileScreen from './Screens/ProfileScreen'
import SalirScreen from './Screens/SalirScreen'

class App extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <TabNav/>
            </SafeAreaView>
        )
    }
};

const TabNav = createMaterialTopTabNavigator({
    Home: { screen: HomeSreen,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon: ({tintColor}) => (
                <Icon name="home" size={24} color={tintColor}/>
            )
        }
    },
    Setting: { screen: SettingScreen,
        navigationOptions:{
            tabBarLabel:'Settings',
            tabBarIcon: ({tintColor}) => (
                <Icon name="cogs" size={24} color={tintColor}/>
            )
        }
    },
    Profile: { screen: ProfileScreen,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: ({tintColor}) => (
                <Icon name="user" size={24} color={tintColor}/>
            )
        }
    },
    Salir: { screen: SalirScreen,
        navigationOptions:{
            tabBarLabel:'Salir',
            tabBarIcon: ({tintColor}) => (
                <Icon name="outdent" size={24} color={tintColor}/>
            )
        }
    },
},{
    ///* Configuracion de -> createMaterialBottomTabNavigator */
    // initialRouteName:'Home',
    // // order:['Setting','Home']
    // activeTintColor:'white',
    // shifting:true
    
    /* Configuracion de -> createMaterialTopTabNavigator */
    initialRouteName:'Home',
    tabBarPosition:'bottom',
    tabBarOptions:{
        activeTintColor:'white',
        inactiveTintColor: 'black',
        style:{
            backgroundColor:'orange',
            borderTopWidth: 0.5,
            borderTopColor:'black'
        },
        labelStyle: {
            fontSize: 10,
        },
        indicatorStyle:{
            height:0
        },
        showIcon: true
    }
    
})


export default App