import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function DateTime() {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(selectedDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  

  return (
    <View>
      <View style={styles.dateTime}>
        <Button style={styles.inputDate} onPress={showDatepicker} title="DATA" />
      </View>
      <View>
        <Button style={styles.inputTime} onPress={showTimepicker} title="HORA" />
      </View>
      <View>
          <Text >
            
          </Text>
          
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    dateTime: {
       
        justifyContent: 'center',
        paddingVertical:10
    },
   

})