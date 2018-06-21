import React, { Component } from 'react' 
import { View, Text, TouchableHighlight, Alert, StyleSheet, ImageBackground} from 'react-native'

class loginView extends Component{
    static navigationOptions = {
        title: 'Login',
    };
    render(){
        return(
            <ImageBackground source={{uri: "https://images.unsplash.com/photo-1504846257989-a76209d9d2ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10a7896f1a6187c14a42a029b1788b02&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"}}
            style={styles.image}>
                <View style={styles.container}>
                <Text style={styles.title}>Acceso</Text>
                    <TouchableHighlight 
                        onPress={(this.onLogin.bind(this))} 
                        style={styles.boton} >
                        <Text style={styles.textoBoton}>Login</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        )
    }


    onLogin(){
        //console.log("HAs pulsado el boton");
        Alert.alert(
            "Acceso",
            "Te has logueado en el sistema",
            [{
                    text: "Cancelar",
                    onPress: (this.cancelar.bind(this))
                },
                {
                text: "Aceptar",
                onPress: (this.aceptar.bind(this))
                //onPress: (this.props.navigation.navigate('Dash'))
            }]
        )
    }

    aceptar(){
        //console.log("Aceptar");
        this.props.navigation.navigate('Dash')
    }

    cancelar(){
        console.log("cancelar");
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
        color:"white"
    }
});


export default loginView