import React, { Component } from 'react'
import { Text, StyleSheet, View} from 'react-native'

class SalirScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text> Salir 2</Text>
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

export default SalirScreen