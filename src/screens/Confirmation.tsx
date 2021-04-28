import React from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from  'react-native';

import{ Button } from '../components/button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    📓 
                </Text>
                <Text style={styles.title}>
                    Olá! 
                </Text>
                <Text style={styles.subtitle}>
                   Agora vamos começar {'\n'} a fazer suas anotações.
                </Text>
                <View style={styles.footer}>
                    <Button  title={"Avançar"} />
                </View>  
            </View>
                    
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontSize:24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    subtitle: {
        fontSize:22,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
        paddingHorizontal: 20
    },
    emoji: {
        fontSize: 44,
        alignItems:'center'
    },
    footer: {
        marginTop:  40,
        width: '100%',
        paddingHorizontal: 40
    }
})