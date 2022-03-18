import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import NewPayment from '../screens/NewPay';

export default function Draw(){
    const Drawer = createDrawerNavigator();


    return(
<Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: '#404040',
                // maxWidth: '75%',
            },
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'gray',
            drawerType: 'front',
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={NewPayment} />
      </Drawer.Navigator>
    );
}