import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";


import App from "../App";

import NewPayment from "../screens/NewPay";
import Draw from "./Drawer";
import TabNav from "./TabNav";


const Stack=createNativeStackNavigator();


export default function CreateStack(){
    return(
<Stack.Navigator headerMode={false}>

    <Stack.Screen  name="Tab" component={TabNav}/>
    <Stack.Screen name="HOME" component={App}/>
    <Stack.Screen name="Pay"  component={NewPayment}/>
  
  
</Stack.Navigator>
    );
}