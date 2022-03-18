import React from 'react';
import { View } from 'react-native';
import App from './App';

import {NavigationContainer} from '@react-navigation/native';
import CreateStack from './Routes/Routes'
export default function MyApp() {

    return(
        
          <NavigationContainer>
      <CreateStack/>
   </NavigationContainer>
      

    );
}