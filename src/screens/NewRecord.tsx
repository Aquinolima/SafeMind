import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from '../components/header'

export function NewRecord(){
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <View style={styles.header}>
                
                <Text style={styles.name}>
                  Olá, Thiago!
                </Text>
                <Text style={styles.title}>
                   Como está se sentindo?
                </Text>
                <Text style={styles.subtitle}>
                   Selecione o campo para adicionar os detalhes.
                </Text>
            </View>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    header: {
        paddingHorizontal: 40,
        
    },
    name:{
        fontSize:25,
        lineHeight: 30,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15
    },
    title: {
        fontSize:20,
        lineHeight: 25,
        color: colors.heading,
        fontFamily: fonts.text,
       
    },
    subtitle: {
        marginBottom: 15,
        fontSize:17,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: fonts.complement

    }
})