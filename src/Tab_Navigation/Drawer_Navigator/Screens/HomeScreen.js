import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Icon , Container, Header, Content, Left, Right } from 'native-base'

class HomeScreen extends Component {
    // static navigationOptions={
    //     drawerIcon:(
    //         <Image
    //             source={require()}
    //             style={{}}
    //         />
    //     )
    // } 
    render() { 
        return (
            <Container >
                <Header>
                    <Right>
                        <Icon
                            name='ios-menu'
                            onPress={() => this.props.navigation.openDrawer()}
                            style={styles.img}
                        />
                    </Right>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Home Screen</Text>
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

export default HomeScreen