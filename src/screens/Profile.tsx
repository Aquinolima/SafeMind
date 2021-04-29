import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Platform, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Image, Keyboard, Dimensions } from 'react-native';


import{ Button } from '../components/button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import logo from '../assets/logo.png';

import { Header } from '../components/header';


export function Profile(){
    const[isFocused, setIsFocused] =  useState(false);
    const[isFilled, setIsFilled] =  useState(false);
    const[name, setName] = useState<string>();
    const navigation = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    };
    function handleInputFocus(){
        setIsFocused(true);
    };
    function handleInputChange( value: string){
        setIsFilled(!!value);
        setName(value);
    };

    function handleSubmit(){
        navigation.navigate('Confirmation');

    };

    function handleSignIn(){
        navigation.navigate('UserLogin');

    };

    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            <View style={styles.header}>
                
                <Text style={styles.title}>
                   Configurações
                </Text>
                <Text style={styles.subtitle}>
                   Selecione o campo para adicionar ou editar.
                </Text>
            </View>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        
                        <View style={styles.form}>

                            
                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.blue}
                            ]}
                            placeholder="  Nome "
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                            
                            />
                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.blue}
                            ]}
                            placeholder="  Telefone "
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                            
                            />


                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.blue}
                            ]}
                            placeholder="  Email"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                            
                            />
                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.blue}
                            ]}
                            placeholder="  Senha "
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                            
                            />
                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.blue}
                            ]}
                            placeholder="  Telefone emergência "
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                            
                            />
                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.blue}
                            ]}
                            placeholder="  Email de compartilhamento "
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                            
                            />
                            <View style={styles.footer}>
                                <Button  title="Cadastrar" onPress={handleSignIn} />
                            </View>
                           

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 54
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

    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 20,
        marginTop: 20,
        padding:  8,
        textAlign:'center'
    },
    footer: {
        marginVertical:  20,
        width: '100%',
        paddingHorizontal: 20
    }
})