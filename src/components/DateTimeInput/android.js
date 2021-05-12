import { useState } from 'react';
import { 
    StyleSheet, 
    Image, 
    TouchableOpacity,
    TextInput,
    } from 'react-native';
import {DatePickerAndroid, TimePickerAndroid } from 'react-native-community/datetimepicker';

import iconCalendar from '../../assets/icons/calendario.png';
import iconHour from '../../assets/icons/hour.png';

export default function DateTimeInputAndroid({ type } ){
        const [datetime, setDateTime] = useState();

        async function selectDataorHour() {
            if(type == 'date'){
                const {action, year, month, day} = await DatePickerAndroid.open({
                    mode: 'calendar'
                });

                if(action == DatePickerAndroid.dateSetAction)
                    setDateTime( `${day} - ${month} - ${year}`);
            } else {
                const {action, hour, minuto } = await TimePickerAndroid.open({
                    is24Hour: true
                });

                if ( action != TimePickerAndroid.dismissedAction)
                setDateTime( `${hour}:${minuto}`);
            }
        }
    

    return(
    <TouchableOpacity onPress={selectDataorHour}>
        <TextInput style={styles.input} 
            placeholder={type == 'date' ? 'Clique aqui para definir a data...' : ' Clique aqui para definir a hora...'}
            editable={false}
            value={datetime}
        /> 
        <Image style={styles.iconTextInput}
            source={type == 'date' ? iconCalendar : iconHour}
        />
    </TouchableOpacity>
)
}
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        padding: 10,
        width: '95%',
        marginHorizontal: 10
    },
    iconTextInput: {
        position: 'absolute',
        left: '95%',
        top: 50
    }
    
})

