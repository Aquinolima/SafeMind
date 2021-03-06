import React, { useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert,

} from 'react-native';

import { Button, ButtonRed } from '../components/button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Flag from '../assets/icons/Flag.png';
import Think from '../assets/icons/Lightbulb.png';
import Fire from '../assets/icons/Fire.png';
import Date from '../assets/icons/calendario.png';

import { Header } from '../components/header';
import typeIcons from '../utils/typeIcons';
import api from '../config/api';




export function Record({route}) {

    // const {registroId} = route.params;
const [registro, setRegistro] = useState('');

const getRegistro = async () => {
    try {
        const {registroId} = route.params;
        const response = await api.get('/mostrar/' + registroId);
        setRegistro(response.data.registro);
    } catch (error) {
        if (error) {
            Alert.alert("", error.response.data.message);
            navigation.navigate('ListRecords');
        } else {
            Alert.alert("", "Registro não encontrado, tente novamente!");
            navigation.navigate('ListRecords');
        }
    }
}

    useFocusEffect(
        useCallback(() => {
            getRegistro();
        },[])
    );
   

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('EditRecord');
    };





    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.header}>

                <Text style={styles.name}>
                    Informações do registro {registro.id} Sentimento: {registro.sentimento}
                </Text>

            </View>


            <ScrollView>
                <View style={styles.reasons} >
                    {
                        typeIcons.map(icon => (
                            <TouchableOpacity>
                                <Image style={styles.iconReasons} source={icon} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                


                <View style={styles.inputCard}>
                    <View style={styles.inputTitle}>
                        <Text style={styles.label}>Emoções</Text>
                    </View>
                    <Text style={styles.inputText}>{registro.emocoes}</Text>

                </View>

                <View style={styles.inputCard}>
                    <View style={styles.inputTitle}>
                        <Image source={Date} style={styles.logoCalendario} />
                        <View>
                            <Text style={styles.label}>Data </Text>
                        </View>
                    </View>

                    <Text style={styles.inputText}>{registro.data}</Text>

                </View>

                <View style={styles.inputCard}>
                    <View style={styles.inputTitle}>
                        <Image source={Flag} style={styles.logo} />
                        <View>
                            <Text style={styles.label}>Situação</Text>
                        </View>
                    </View>
                    <Text style={styles.inputText}>{registro.situacao}</Text>


                </View>

                <View style={styles.inputCard}>
                    <View style={styles.inputTitle}>
                        <Image source={Think} style={styles.logo} />
                        <Text style={styles.label}>Pensamentos</Text>
                    </View>
                    <Text style={styles.inputText}>{registro.pensamentos}</Text>
                </View>

                <View style={styles.inputCard}>
                    <View style={styles.inputTitle}>
                        <Image source={Fire} style={styles.logo} />
                        <Text style={styles.label}>Reação</Text>
                    </View>
                    <Text style={styles.inputText}>{registro.reacao}</Text>
                </View>

                <View style={styles.footer} >
                    <Button title="Editar" onPress={handleSignIn} />
                    <ButtonRed title="Apagar" />
                </View>


            </ScrollView>


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
    name: {
        fontSize: 25,
        lineHeight: 30,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 15
    },
    title: {
        fontSize: 20,
        lineHeight: 25,
        color: colors.heading,
        fontFamily: fonts.text,

    },
    subtitle: {
        marginBottom: 15,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading,
        fontFamily: fonts.complement
    },
    inputCard: {
        width: '90%',

        shadowColor: colors.body_dark,
        backgroundColor: colors.background,
        borderRadius: 10,
        marginHorizontal: 15,
        padding: 15,
        marginTop: 10,
        alignItems: 'stretch'

    },
    inputTitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start'

    },
    label: {
        fontWeight: 'bold',
        fontFamily: fonts.heading,
        fontSize: 25,
    },
    input: {
        flexDirection: 'row',
        fontWeight: 'bold',
        fontFamily: fonts.complement,
        fontSize: 15,
        padding: 10
    },
    inputText: {
        flexDirection: 'row',
        fontWeight: 'bold',
        fontFamily: fonts.complement,
        fontSize: 15,
        padding: 10,
        color: colors.heading
    },
    logo: {
        marginRight: 10
    },
    logoReasons: {
        backgroundColor: colors.background,
        borderRadius: 10,
        margin: 10,

    },
    footer: {
        marginVertical: 20,
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 25,
    },
    reasons: {
        flexDirection: 'row',
        width: '90%',
        shadowColor: colors.body_dark,
        backgroundColor: colors.background,
        borderRadius: 10,
        marginHorizontal: 15,
        padding: 15,
        marginTop: 10,

    },
    iconReasons: {
        width: 50,
        height: 50,
        marginRight: 15,
        marginLeft: -15,

    },
    logoCalendario: {
        width: 40,
        height: 40,
        marginRight: 10
    }
})