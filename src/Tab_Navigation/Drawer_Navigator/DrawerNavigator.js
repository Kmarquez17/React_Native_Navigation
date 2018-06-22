import React, { Component } from 'react'
import { YellowBox,Image,StyleSheet } from 'react-native'
import { Container, Content,  Header, Body } from 'native-base'
import { createDrawerNavigator,DrawerItems } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import HomeSreen from './Screens/HomeScreen'
import SettingScreen from './Screens/SettingScreen'

const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={styles.header}>
            <Body>
                <Image
                    style={styles.drawerImage}
                    source={require('../../../list.png')}
                />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
)

const Drawer = createDrawerNavigator({
    Home: {
        screen: HomeSreen,
        navigationOptions: {
            drawerLabel: 'Home KM',
            drawerIcon: ({ tintColor }) => (
                <Icon name="home" size={24} color={tintColor} />
            )
        }
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            drawerLabel: 'Setting',
            drawerIcon: ({ tintColor }) => (
                <Icon name="cogs" size={24} color={tintColor} />
            )
        }
    }
},{
    initialRouteName:'Home',
    contentComponent:CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerPosition:'right'

})
const styles = StyleSheet.create({ 
    header:{
        height:180,
        // backgroundColor: '#fff',
    },
    drawerImage:{
        width: 150,
        height:150,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center'
    }
}) 

export default Drawer