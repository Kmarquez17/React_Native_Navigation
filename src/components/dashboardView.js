import React, { Component } from 'react' 
import { View, Text,StyleSheet,TouchableHighlight } from 'react-native'

class dashboardView extends Component{
    static navigationOptions = {
        title: 'DashBoard',
    };
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Este es el dashboardView</Text>
                <TouchableHighlight 
                        //onPress={(this.onLogin.bind(this))} 
                        //onPress={() => this.props.navigation.navigate('Login')}
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={styles.boton} >
                        <Text style={styles.textoBoton}>Ir Atras</Text>
                    </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image:{
        flex:1
    },
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent: 'center'
    },
    boton:{
        width:300,
        height:40,
        backgroundColor:"red",
        alignItems:"center",
        marginBottom:10,
        borderRadius:8,
        borderWidth:1,
        justifyContent: 'center',
        marginTop:30
    },
    textoBoton:{
        color:"white"    
    },
    title: {
        marginTop:0,
        fontSize:25,
        color:"black"
    }
});

export default dashboardView