import React from 'react';
import { YellowBox } from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import HomeSreen from './Screens/HomeScreen'
import SettingScreen from './Screens/SettingScreen'

const TabNav = createBottomTabNavigator({
    Home: { screen: HomeSreen,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon: ({tintColor}) => (
                <Icon name="align-justify" size={24} color={tintColor}/>
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
})

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor: "#fff",
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// })

export default TabNav