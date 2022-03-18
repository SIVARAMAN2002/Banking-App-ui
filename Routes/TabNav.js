
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import App from '../App';
import NewPayment from '../screens/NewPay';
import Draw from './Drawer';

export default function TabNav(){
    const Tab=createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={({ route }) => ({

         tabBarStyle:{
           padding:10,
           fontSize:30,
         }
         

      })} >
        <Tab.Screen name="Home" component={App} />
        <Tab.Screen name="Settings" component={NewPayment} />
        <Tab.Screen  name="Draw" component={Draw}/>
      </Tab.Navigator>

    );
}