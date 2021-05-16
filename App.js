import React from 'react';
import {LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function teste() {
  let resData=await AsyncStorage.getItem('userData');
            console.log(JSON.parse(resData));
}
teste();


LogBox.ignoreAllLogs()

import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';

import Routes from './src/routes';
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
    return <AppLoading/>
    
  return (
      <Routes />
  )
}

