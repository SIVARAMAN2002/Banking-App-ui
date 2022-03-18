import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TextInput,ScrollView,FlatList} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/Home';
import { useFonts } from 'expo-font';
import { MaterialIcons,Ionicons,FontAwesome5,Feather,AntDesign  ,Foundation} from '@expo/vector-icons';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { TouchableOpacity } from 'react-native-web';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function App({navigation}) {

  
  const [loaded] = useFonts({
    Montserrat: require('./assets/Oswald-Light.ttf'),
    mi:require('./assets/Rowdies-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  
  
  return (

  <ScrollView>
    <ImageBackground source={require('./images/back.png')} style={styles.sh}>
      <View style={styles.outer}>
      <View>
      <MaterialIcons name="account-circle" size={40} color="black" style={{marginTop:4,flexDirection:'row',top:30}}/>
      </View>
      <View>
      <Ionicons name="notifications" size={38} color="black" style={styles.not}/>
        </View>
        <View style={styles.fo}>
      <Text style={{fontFamily: 'Montserrat',fontSize:18,fontStyle:'normal',fontWeight:'bold',textAlign:'center'}}>HI,SIVARAMAN</Text>
       <Text style={{fontFamily:'Montserrat',fontSize:13,textAlign:'center'} }>welcome to ICIC Bank</Text>
        </View>
        </View>

        <View>
          </View>

        <View style={styles.images}>
          <Text style={{fontFamily:'mi',fontSize:20}}>CREDIT CARDS</Text>
          <ScrollView horizontal={true}>
         <ImageBackground source={require('./assets/card2.jpg')} style={styles.im}>
         
         </ImageBackground>
         <ImageBackground source={require('./assets/card2.jpg')} style={styles.im}>

         </ImageBackground>
         <ImageBackground source={require('./assets/card2.jpg')} style={styles.im}>

         </ImageBackground>
         </ScrollView>
         
        </View>
        <View style={styles.se}>
         
        


        
         <Text onPress={()=> navigation.push("Pay")}  style={styles.new} >NEW PAYMENT</Text>
         <AntDesign name="rightcircle" size={24} color="black" style={styles.ssf} />
       </View>
        <View>
        
            <Home style={styles.hoem}/>
        </View>
       

    </ImageBackground>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sh:
  {
    height:'100%',
    width:'100%'
  },
  textin:
  {
    top:50,
    margin:20,
    padding:10,
   backgroundColor:'white',
   borderRadius:7,
   width:250,
  marginLeft:50,
  marginTop:-60
  },
  not:
  {
    margin:20,
    left:285,
    top:-30
  },

  fo:
  {
    marginTop:-90
  },
  outer:
  {
    borderRadius:20,
    backgroundColor:'#03a89e',
    borderColor:'blue',
    borderWidth:2,
    top:0,
    padding:10,
    paddingTop:-10,
    
  },
  im:{
    height:230,
    width:340,
    marginLeft:10,
  },

  images:{
    borderRadius:30,
    marginTop:10,
    backgroundColor:'#03a89e',
    padding:10,
    
  },
  hoem:{
    flex:1
  },
  
  se:{
    borderRadius:10,
    backgroundColor:'#03a89e',
    width:300,
    height:50,
    marginLeft:20,
    marginTop:5
  },
  new:
  {
    padding:10,
    textAlign:'center'
  },
  ssf:
{
marginLeft:220,
marginTop:-30
}
  
  
});

