import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Home({navigation}){
    return(
        <View style={styles.bloco}>
            <Text style={styles.texto}>DIREITOS AUTORAIS </Text>
            <Text style={styles.texto}>Felipe Barbosa dos Santos </Text>
            <Image
            style={styles.img}
            source={{
                uri: 'https://s2.glbimg.com/lktU4yMIBXvwtZncP7W6i1Celcg=/0x0:1200x799/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/7/f/2AR5WtRAWwrVf5Y6vfVg/neymar-taca.jpg',
            }}
            />
            <View>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Messi")}>
                    <Text style={styles.textBtn}>JOGADORES</Text>
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
    btn: {
        backgroundColor: '#0294E8',
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
    img: {
        width: 400,
        height: 190,
        margin: 5,
        textAlign: 'center',
        borderRadius: 20,
},
});