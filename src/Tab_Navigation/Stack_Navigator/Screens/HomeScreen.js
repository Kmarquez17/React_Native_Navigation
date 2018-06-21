import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> HomeScreen </Text>
                <View style={styles.top}>
                    <Button
                        title="Login"
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                </View>
                <View style={styles.top}>
                    <Button
                        title="Go Back"
                        onPress={() => this.props.navigation.goBack()}
                    />
                </View>
                <View style={styles.top}>
                    <Button
                        title="Pop To Top"
                        onPress={() => this.props.navigation.popToTop()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        marginTop: 10,
    }
})

export default HomeScreen