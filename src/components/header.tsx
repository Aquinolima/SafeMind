import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight  } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import logo from '../assets/logo.png'

export function Header(){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.subtitle}>PorTAAL</Text>
                <Text style={styles.title}>SafeMind </Text>
            </View>
            <Image source={logo} style={styles.logo}/>
            
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
        paddingVertical: 15,
        paddingHorizontal: 40
        
    },
    content: {
        flexDirection: 'row',
    },
    subtitle: {
        fontSize: 20,
        fontFamily: fonts.text,
        color: colors.orange,
        marginTop: 5
    },
    title: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.blue,
        lineHeight: 40
    },
    logo: {
        width: 70,
        height: 70,
        borderRadius: 35,
    }
});