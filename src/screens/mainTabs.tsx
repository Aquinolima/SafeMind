import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ListRecords from './ListRecords';
import NewRecord from './NewRecord';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="ListRecords" component={ListRecords}/>
        <Tab.Screen name="NewRecord" component={NewRecord}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
);