import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import colors from '../styles/colors'
import { Button } from '../components/button'
 
import welcomeImg from '../assets/welcome.png';

export function Welcome () {
    return(
        <View style={styles.container}>
            <Text style={styles.title} > 
                Resgistre {'\n'}
                 seu dia de forma {'\n'}
                 fácil
            </Text>

            <Image source={welcomeImg} style={styles.image}/>
            
            <Text style={styles.subtitle} >
                Esse é o seu diário pessoal onde você poderá anotar tudo e compartilhar com quem quiser !
            </Text>
            
           <Button title="Avançar"/>
           
          
         
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
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
        width: 350,
        height: 350 
   }
  

   
})

