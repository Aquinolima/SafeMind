import React, { useCallback, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, Alert, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import api from '../config/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from '../components/header'



export function ListRecords() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('UserLogin');
            
    };

    const [registros, setRegistros] = useState();

    const getRegistros = async () => {
        try {
            const response = await api.get('/');
            setRegistros(response.data.registros);

        } catch (error) {
            Alert.alert("", "Erro: Nenhum registro encontrado, tente mais tarde!")
        }
    };

    useFocusEffect(
        useCallback(() => {
            getRegistros();
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header />

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

                <FlatList
                    data={registros}
                    renderItem={({ item }) => (
                        < >
                            <TouchableOpacity style={styles.card}
                            onPress={() => {
                                navigation.navigate('EditRecord', {
                                    registroId: item.id,
                                })
                            }}>
                                <View style={styles.cardLeft}>
                                    <Text style={styles.cardTitle}> {item.id} </Text>
                                    <Text style={styles.cardTitle}> {item.situacao} </Text>
                                </View>
                                <View style={styles.cardRight}>
                                    <Text style={styles.cardDate}> {item.sentimento} </Text>
                                    <Text style={styles.cardTime}> {item.data}</Text>
                                </View>
                            </TouchableOpacity>
                        </>

                    )} keyExtractor={registro => String(registro.id)}
                />


               

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
        fontSize: 25,
        lineHeight: 30,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15
    },
    subtitle: {
        marginBottom: 10,
        fontSize: 20,
        lineHeight: 25,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    card: {
        flexDirection: 'row',
        width: '90%',
        height: 80,
        shadowColor: colors.body_dark,
        backgroundColor: colors.background,
        borderRadius: 10,
        marginHorizontal: 15,
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 10

    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    cardTitle: {
        marginLeft: 10,
        fontFamily: fonts.heading,
        fontWeight: 'bold',
        fontSize: 16,
        borderRightWidth: 2,
        borderRightColor: colors.body_dark
    },
    cardDate: {
        fontFamily: fonts.heading,
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.blue
    },
    cardTime: {
        fontFamily: fonts.heading,
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.orange
    }
})