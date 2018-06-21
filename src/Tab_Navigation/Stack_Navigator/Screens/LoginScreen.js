import React, { Component } from 'react'
import { Text, StyleSheet, View, Button} from 'react-native'

class LoginScreen extends Component {
    static navigationOptions={
        header:null
    }
  render() {
    return (
      <View style={styles.container}>
        <Text> LoginScreen </Text>
        <Button title="Home"
            onPress={()  => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default LoginScreen