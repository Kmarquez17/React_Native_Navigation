import React, {Component} from 'react'
import {YellowBox} from 'react-native'
import {createStackNavigator} from 'react-navigation'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import LoginScreen from './Screens/LoginScreen'
import HomeSreen from './Screens/HomeScreen'

class StackNavigator extends Component{
    render(){
        return(
            <Stack/>
        )
    }
}

const Stack = createStackNavigator({
    Login:{
        screen: LoginScreen
    },
    Home:HomeSreen

})

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor: "#fff",
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// })

export default StackNavigator;
