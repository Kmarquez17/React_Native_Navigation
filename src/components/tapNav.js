import React from 'react'
import { YellowBox } from 'react-native';
import { createBottomTabNavigator  } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import DashView from "./dashboardView";
import HeroView from "./heroesView"


const TabNav = createBottomTabNavigator ({
    Dash: { screen: DashView,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon: ({tintColor}) => (
                <Icon name="align-justify" size={24} color={tintColor}/>
            )
        }
    },
    Hero: { screen: HeroView,
        navigationOptions:{
            tabBarLabel:'Settings',
            tabBarIcon: ({tintColor}) => (
                <Icon name="cogs" size={24} color={tintColor}/>
            )
        }
    },
})

export default TabNav

