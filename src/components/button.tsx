import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ... rest } : ButtonProps){
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.5} {... rest}>
        <Text style={styles.buttonText}>
          {title}
        </Text>
        </TouchableOpacity>
    )
}
export function ButtonRed({ title, ... rest } : ButtonProps){
    return(
        <TouchableOpacity style={styles.buttonRed} activeOpacity={0.5} {... rest}>
        <Text style={styles.buttonText}>
          {title}
        </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 15,
        paddingHorizontal: 15,
       height: 56,
              
    },
    buttonRed: {
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 15,
        paddingHorizontal: 15,
       height: 56,
    },
    buttonText: {
        color: colors.background, 
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: fonts.heading
   }

   
})