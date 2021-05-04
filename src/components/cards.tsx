import React from 'react';
import { Text, View, Image, TouchableOpacity, TouchableOpacityComponent, StyleSheet} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function RecordCards() {
    return (
        <TouchableOpacity style={styles.card}>
        <View style={styles.cardLeft}>
            <Text style={styles.cardTitle}> up </Text>
            <Text style={styles.cardTitle}> Resgistro 1 </Text>
        </View>
        <View style={styles.cardRight}>
        <Text style={styles.cardDate}> 01/05/2021 </Text>
        <Text style={styles.cardTime}> 10:00 </Text>
        </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
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
cardLeft:{
    flexDirection: 'row',
    alignItems: 'center'
},
cardRight:{
    alignItems: 'flex-end',
    justifyContent: 'space-between'
},
cardTitle:{
    marginLeft: 10,
    fontFamily: fonts.heading,
    fontWeight: 'bold',
    fontSize: 16,
    borderRightWidth: 2,
    borderRightColor: colors.body_dark
},
cardDate:{
    fontFamily: fonts.heading,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.blue
},
cardTime:{
    fontFamily: fonts.heading,
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.orange
}
});