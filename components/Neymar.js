import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Neymar({navigation}){
    return(
        <View style={styles.bloco}>
            <Text style={styles.texto}>NEYMAR MODO HEXA</Text>
            <Image
            style={styles.img}
            source={{
                uri: 'https://esportecerto.com/wp-content/uploads/2021/03/img_605393843b96e.jpg',
            }}
            />
            <View>
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.textBtn}>Inicio</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    bloco: {
        marginTop:30,

    },
    texto:{
        fontSize: 30,
        textAlign: 'center'
    },
    img: {
        
        width: 400,
        height: 190,
        margin: 5,
        textAlign: 'center',
        borderRadius: 20,
},
    btn: {
    backgroundColor: '#0AE6FF',
    marginTop: 20,
    width: '80%',
    marginLeft: '10%',
    borderRadius: 5
},
textBtn: {
    fontSize:20,
    color: '#FFF',
    textAlign: 'center'
},
});