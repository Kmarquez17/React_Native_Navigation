import { YellowBox,Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-vector-icons/FontAwesome';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import DashView from "./dashboardView";
import HeroView from "./heroesView"


// const myIcon = (<Icon name="rocket" size={30} color="#900" />)
//Para la navegacion se siguio esta guia: 
//https://facebook.github.io/react-native/docs/navigation.html
//Libreria : 
//https://reactnavigation.org


const tapNav = createBottomTabNavigator(
    
    {
        Dash: {
            screen: DashView,
            navigationOptions: {
                tabBarLabel: 'Feed',
                tabBarIcon: ({tintColor}) => ( <Icon name="address-book" color={tintColor} size={24} />)
            }
        },
        Hero: {
            screen: HeroView
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            labelStyle: {
                fontSize: 18,
            },
            style: {
                backgroundColor: 'white',
            },
            activeTintColor: 'red',
            inactiveTintColor: 'black',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);

export default tapNav

