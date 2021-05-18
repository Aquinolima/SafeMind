import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ScrollView, 
        SafeAreaView, 
        View, 
        Text, 
        TextInput, 
        Platform, 
        StyleSheet, 
        KeyboardAvoidingView, 
        TouchableWithoutFeedback, 
        Keyboard, 
    } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import{ Button, ButtonRed } from '../components/button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


import { Header } from '../components/header';


export function Profile(){
    const[isFocused, setIsFocused] =  useState(false);
    const[isFilled, setIsFilled] =  useState(false);
    const[name, setName] = useState('');
    const navigation = useNavigation('');

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    };
    function handleInputFocus(){
        setIsFocused(true);
    };
    function handleInputChange( value ){
        setIsFilled(!!value);
        setName(value);
    };

    function handleSubmit(){
        navigation.navigate('Confirmation');

    };

    function handleSignIn(){
        navigation.navigate('UserLogin');

    };

    const [user,setUser]=useState('');
    const [nome,setNome]=useState('');
    const [tel,setTel]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    useEffect(()=>{
        async function getUser() {
            let response = await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.id);
            setNome(json.name);
            setTel(json.tel);
            setEmail(json.email);
            setPass(json.password);
        }
        getUser();
    }, []);
    

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
                  <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        
                        <View style={styles.form}>

                            
                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.blue}
                            ]}
                            value= {nome}
                            placeholder= {nome}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={text => setNome(text)}
                            
                            
                            />
                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.blue}
                            ]}
                            value= {tel}
                            placeholder= {tel}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={text => setTel(text)}
                            
                            />


                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.blue}
                            ]}
                            value= {email}
                            placeholder= {email}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={text => setEmail(text)}
                            
                            />
                            <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.blue}
                            ]}
                            value= {pass}
                            secureTextEntry={true}
                            placeholder= {pass}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={text => setPass(text)}
                            
                            />
                           {/*  <TextInput 
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
                            
                            /> */}
                        <View style={styles.footer}>
                                <Button  title="Salvar" onPress={handleSignIn} />
                                <ButtonRed  title="Sair" onPress={handleSignIn} />
                        </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                </ScrollView>
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
        paddingHorizontal: 54,
        paddingTop:50
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
        marginBottom: 5,
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
        fontSize: 15,
        lineHeight: 10,
        marginTop: 5,
        paddingBottom:  5,
        textAlign:'center'
    },
    footer: {
        marginVertical:  20,
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 25
    }
})