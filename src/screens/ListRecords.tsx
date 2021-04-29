import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from '../components/header'

export function ListRecords(){
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <View style={styles.header}>
                
                <Text style={styles.title}>
                   Lista de Registros
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
    title: {
        fontSize:25,
        lineHeight: 30,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15
    },
    subtitle: {
        marginBottom: 10,
        fontSize:20,
        lineHeight: 25,
        color: colors.heading,
        fontFamily: fonts.text,

    }
})