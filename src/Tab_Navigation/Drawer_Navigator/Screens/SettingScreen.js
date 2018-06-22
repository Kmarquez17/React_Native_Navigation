import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
class SettingScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon
                            name='ios-menu'
                            onPress={() => this.props.navigation.openDrawer()}
                            style={styles.img}
                        />
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Setting Screen</Text>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({ 
    img:{
        marginLeft: -100,
    }
})

export default SettingScreen