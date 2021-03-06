import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    ScrollView,
    Alert,

    TouchableOpacity,
    Platform
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import Flag from '../assets/icons/Flag.png';
import Think from '../assets/icons/Lightbulb.png';
import Fire from '../assets/icons/Fire.png';
import Date from '../assets/icons/calendario.png';

import { Header } from '../components/header';
import typeIcons from '../utils/typeIcons';
import AuthRoutes from '../routes/tab.routes';
import { Button, ButtonRed } from '../components/button';



export function NewRecord() {
    const navigation = useNavigation();

    const [emocoes, setEmocoes] = useState('');
    const [humor, setHumor] = useState('');
    const [data, setData] = useState('');
    const [situacao, setSituacao] = useState('');
    const [pensamento, setPensamento] = useState('');
    const [reacao, setReacao] = useState('');
    const [user, setUser] = useState('');
    const [response, setResponse] = useState('');

    // Pegar o Id do Usuário

    useEffect(()=>{
        getUser();
    }, []);

    async function getUser() {
            let response = await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.id);
    }



    //Função de Envio do Form

    async function sendForm(){
        Alert.alert('Registro Criado com sucesso!');
        navigation.navigate('Confirmation');
        let response = await fetch('http://192.168.0.12:3000/createRegistro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user,
                sentimento: humor,
                emocoes: emocoes,
                situacao: situacao,
                pensamentos: pensamento,
                reacao: reacao,
                data: data
              })
              
        });
        
        }


    
    function handleSignIn() {
        navigation.navigate('UserLogin');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.header}>

                <Text style={styles.name}>
                Como está se sentindo?
                </Text>
                <Text style={styles.title}>
                Selecione o campo para adicionar os detalhes.
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
                        <Text style={styles.label}>Descreva seu Humor?</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        maxLength={300}
                        placeholder="Muito Bom, Bom, Normal, Ruim, Péssimo "
                        onChangeText={text => setHumor(text)}
                    ></TextInput>
                </View>

                <View style={styles.inputCard}>
                    <View style={styles.inputTitle}>
                        <Text style={styles.label}>Descreva as emoções</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        maxLength={300}
                        placeholder="Ansioso, Assustado, Raiva, Feliz, Alegre, Calmo, Triste ..."
                        onChangeText={text => setEmocoes(text)}
                    ></TextInput>
                </View>

                <View style={styles.inputCard}>
                    <View style={styles.inputTitle}>
                        <Image source={Date} style={styles.logoCalendario} />
                        <View>
                            <Text style={styles.label}>Data </Text>
                        </View>
                    </View>

                    <Text style={styles.inputText}>Qual a data do ocorrido?</Text>

                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        multiline={true}
                        maxLength={300}
                        placeholder="DD - MM - YYYY "
                        onChangeText={text => setData(text)}
                    ></TextInput>



                </View>

                <View style={styles.inputCard}>
                    <View style={styles.inputTitle}>
                        <Image source={Flag} style={styles.logo} />
                        <View>
                            <Text style={styles.label}>Situação</Text>
                        </View>
                    </View>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        maxLength={300}
                        placeholder="Qual situação causou essas emoções? "
                        onChangeText={text => setSituacao(text)}
                    ></TextInput>
                </View>

                <View style={styles.inputCard}>
                    <View style={styles.inputTitle}>
                        <Image source={Think} style={styles.logo} />
                        <Text style={styles.label}>Pensamentos</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        maxLength={300}
                        placeholder="Quais foram seus pensamentos no evento?"
                        onChangeText={text => setPensamento(text)}
                    ></TextInput>
                </View>

                <View style={styles.inputCard}>
                    <View style={styles.inputTitle}>
                        <Image source={Fire} style={styles.logo} />
                        <Text style={styles.label}>Reação</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        maxLength={300}
                        placeholder="Qual foi sua reação?"
                        onChangeText={text => setReacao(text)}
                    ></TextInput>
                </View>

                <View style={styles.footer}>
                    <Button title="Salvar" 
                    onPress={
                        ()=>sendForm()} 
                    />
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