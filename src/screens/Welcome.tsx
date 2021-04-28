import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts'; 

 
import welcomeImg from '../assets/welcome.png';
import { useNavigation } from '@react-navigation/core';

export function Welcome () {
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');

    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <Text style={styles.title} > 
                    Resgistre{'\n'}
                    seu dia de {'\n'}
                    forma fácil
                </Text>

                <Image source={welcomeImg} style={styles.image} resizeMode="contain"/>
                
                <Text style={styles.subtitle} >
                    Esse é o seu diário pessoal onde você poderá anotar tudo e compartilhar com quem quiser !
                </Text>
                
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleStart}>
                    <Text >
                        <Feather                    
                            name="chevron-right" 
                            style={styles.buttonIcon} 
                        />
                    </Text>
                </TouchableOpacity>
                           
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 45,
        paddingHorizontal: 10,
        paddingTop: 15,
        fontFamily: fonts.heading,
        lineHeight: 35
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 30,
        color: '#52665A',
        fontFamily: fonts.text
    },
    image:{
        height: Dimensions.get("window").width * 0.8
    },
    button:{
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 15,
        width: 56,
        height: 56,
    },
    buttonIcon: {
        color: colors.background, 
        fontWeight: 'bold',
        fontSize: 24,
        paddingHorizontal: 15
    }
  
})

