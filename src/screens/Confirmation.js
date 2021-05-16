import { useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    SafeAreaView,
    StyleSheet,
    View,
    Text, 
    Image,
    Dimensions
} from  'react-native';


import logo from '../assets/logo.png';
import{ Button } from '../components/button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){
    const navigation = useNavigation();

    function handleNew(){
        navigation.navigate('NewRecord');
    };
    function handleRecord(){
        navigation.navigate('ListRecords');
    };
    function handleProfile(){
        navigation.navigate('Profile');
    };


    const [user,setUser]=useState('');

    useEffect(()=>{
        async function getUser() {
            let response = await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    }, []);
    

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                
                <Image source={logo} style={styles.image} resizeMode="contain"/>

                <Text style={styles.title}>
                    Olá, {user}!
                </Text>
                <Text style={styles.subtitle}>
                   Agora vamos começar {'\n'} a fazer suas anotações.
                </Text>
                
                <View style={styles.footer}>
                    <Button  title={"Avançar"} onPress={handleRecord} />
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
    image:{
        height: Dimensions.get("window").width * 0.2
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
    footer: {
        marginTop:  40,
        width: '100%',
        paddingHorizontal: 40
    }
})