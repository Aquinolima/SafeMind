import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight  } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import userImg from '../assets/userImg.png'

export function HeaderRecord(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá, </Text>
                <Text style={styles.userName}>Thiago </Text>
            </View>
            <Image source={userImg} style={styles.userImage}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
        backgroundColor: colors.blue_light,
        paddingHorizontal: 40
        
    },
    greeting: {
        fontSize: 32,
        fontFamily: fonts.text,
        color: colors.heading
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    },
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 40,
    }
});