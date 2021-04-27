import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Dimensions} from 'react-native';
import colors from '../styles/colors'
import { Button } from '../components/button'
 
import welcomeImg from '../assets/welcome.png';

export function Welcome () {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} > 
                Resgistre{'\n'}
                 seu dia de forma {'\n'}
                 fácil
            </Text>

            <Image source={welcomeImg} style={styles.image} resizeMode="contain"/>
            
            <Text style={styles.subtitle} >
                Esse é o seu diário pessoal onde você poderá anotar tudo e compartilhar com quem quiser !
            </Text>
            
           <Button title="Avançar"/>
                           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 45,
        paddingHorizontal: 10,
        paddingTop: 15
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 30,
        color: '#52665A'
    },
    image:{
        height: Dimensions.get("window").width * 0.8
   }
  
})

