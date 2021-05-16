import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { Welcome } from '../screens/Welcome';
import { UserLogin } from '../screens/UserLogin';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';

import { ForgetPass } from '../screens/ForgetPass';
import { NewRecord } from '../screens/NewRecord';
import { Record } from '../screens/Record';
import { EditRecord } from '../screens/EditRecord';
import { Profile } from '../screens/Profile';



import colors from '../styles/colors';
import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();



const AppRoutes: React.FC = () => (

    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen
            name="UserLogin"
            component={UserLogin}
        />

        <stackRoutes.Screen
            name="ForgetPass"
            component={ForgetPass}
        />

        <stackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />

        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />

        <stackRoutes.Screen
            name="ListRecords"
            component={AuthRoutes}
        />

        <stackRoutes.Screen
            name="Record"
            component={Record}
        />

        <stackRoutes.Screen
            name="EditRecord"
            component={EditRecord}
        />

        <stackRoutes.Screen
            name="NewRecord"
            component={NewRecord}
        />
       
        <stackRoutes.Screen
            name="Profile"
            component={Profile}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;
