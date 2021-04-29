import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {ListRecords} from '../screens/ListRecords';
import {NewRecord} from '../screens/NewRecord';
import {Profile} from '../screens/Profile';

import colors from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator tabBarOptions={{
            activeTintColor: colors.blue,
            inactiveTintColor: colors.heading,
            style: {
                padding: 5,
                height:50,
                
                
            },
        }}>
            <AppTab.Screen 
            name="Registros" 
            component={ListRecords}
            options={{
                tabBarLabel:"",
                tabBarIcon: (({ size, color }) => (
                    <MaterialIcons
                        name="list"
                        size={size * 1.7}
                        color={color}
                    />
                ))
            }}
            />

            <AppTab.Screen 
            name=" " 
            component={NewRecord}
            options={{
                tabBarLabel:"",
                tabBarIcon: (({ size, color }) => (
                    <MaterialIcons
                        name="add-circle-outline"
                        size={size * 2.5}
                        color={color}
                        
                    />
                ))
            }}
            />
            
            <AppTab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarLabel:"",
                tabBarIcon: (({ size, color }) => (
                    <MaterialIcons
                        name="person"
                        size={size * 1.7}
                        color={color}
                    />
                ))
            }}
            />

        </AppTab.Navigator>
    )
}

export default AuthRoutes;
