import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    Image,
    Dimensions,
    Alert,
    FlatList
} from 'react-native';
import api from '../config/api';

import { Button } from '../components/button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import logo from '../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserLogin() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    //Envio do formulário de Login
    async function getLogin(){
        let response = await fetch('http://192.168.0.12:3000/mostrarUser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
              })
        });
        let json=await response.json();
        console.log(json);
        if(json === 'error'){
            Alert.alert('Erro: Login ou senha inválidos!')
            await AsyncStorage.clear();
        }else{
            let userData= await AsyncStorage.setItem('userData', JSON.stringify(json));
            let resData=await AsyncStorage.getItem('userData');
            navigation.navigate('Confirmation');
        }
        }
        
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>('');
    const navigation = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    };
    function handleInputFocus() {
        setIsFocused(true);
    };

    function handleSignUp() {
        navigation.navigate('UserIdentification');
    };

    function handleForget() {
        navigation.navigate('ForgetPass');
    };

    return (

        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>

                        <View style={styles.form}>

                            <View style={styles.header}>

                                {/* 
                                <Text style={styles.emoji}>
                                    { isFilled ?  '😃' : '🙂' } 
                                </Text>
                                */}

                                <Image source={logo} style={styles.image} resizeMode="contain" />
                                <Text style={styles.title}>
                                    Insira seu{'\n'} email e senha
                                </Text>
                                
                            </View>

                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.blue }
                                ]}
                                placeholder="  Digite seu email "
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={text => setEmail(text)}

                            />
                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.blue }
                                ]}
                                placeholder="  Digite sua senha "
                                secureTextEntry={true}
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={text => setPassword(text)}

                            />

                            <View style={styles.footer}>
                                <Button title="Entrar" onPress={() => getLogin()} />
                            </View>

                            <Text style={styles.infos} onPress={handleSignUp}>
                                Não tenho cadastro.
                            </Text>
                            <Text style={styles.infos} onPress={handleForget}>
                                Esqueci minha senha.
                            </Text>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
 };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54
    },
    header: {
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    infos: {
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.complement,
        marginTop: 10
    },
    image: {
        height: Dimensions.get("window").width * 0.2
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
});