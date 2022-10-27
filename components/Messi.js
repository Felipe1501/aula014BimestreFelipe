import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Messi({navigation}){
    return(
        <View style={styles.bloco}>
            <Text style={styles.texto}>ANCARA MESSI</Text>
            <Image
            style={styles.img}
            source={{
                uri: 'https://cdn.livepix.gg/profile/avatars/9e7dbf12-86b0-43f9-93e5-8d10ac435a7c.png',
            }}
            />
             <View>
                <TouchableOpacity 
                style={styles.btn}
                onPress={() => navigation.navigate("Neymar")}>
                    <Text style={styles.textBtn}>Neymar</Text>
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
        
        width: 200,
        height: 190,
        margin: 5,
        textAlign: 'center',
        borderRadius: 20,
        alignSelf: 'center'
    },
    btn: {
        backgroundColor: '#0A65FF',
        marginTop: 20,
        width: '80%',
        marginLeft: '10%',
        borderRadius: 5,
    },
     textBtn: {
        fontSize:20,
        color: '#FFF',
        textAlign: 'center'
    },
});