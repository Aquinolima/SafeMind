import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cards from '../components/cards';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from '../components/header'
import { Button, ButtonRed } from '../components/button';


export function ListRecords(){
    const navigation = useNavigation();

    function handleSignIn(){
        navigation.navigate('UserLogin');

    };
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>
                    Lista de Registros
                    </Text>
                    <Text style={styles.subtitle}>
                    Selecione o campo para ver ou editar o registro.
                    </Text>
                </View>
            </View>

            
            <ScrollView>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </ScrollView>

          

         
          {/*   <View style={styles.titleButtons}>
                    <Button title="Dicas" onPress={handleSignIn} ></Button>
                    <ButtonRed title="Contato de Emergência" onPress={handleSignIn} ></ButtonRed>
            </View>
             */}
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
    titleButtons: {
        flexDirection: 'row',
        marginTop: 10,
        borderTopWidth: 3,
        borderColor: colors.body_light,
        paddingTop: 5,       
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 10

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