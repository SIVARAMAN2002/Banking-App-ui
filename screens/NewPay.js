import React from 'react';
import { StyleSheet, Text, View,FlatList ,ActivityIndicator} from 'react-native';
import { useState } from 'react';

export default function NewPayment(){

    return(
       <View>
           <View style={styles.content}> 
               <Text style={styles.texte}>YOUR BALANCE</Text>
                <Text></Text>
               <Text style={styles.texte}>$100,000.375</Text>
           </View>
       </View>
    );
}

const styles=StyleSheet.create({
    content:{
      marginLeft:0,
      textAlign:'center',
      borderStyle:'solid',
       borderColor:'blue',
       padding:30,
       backgroundColor:'blue',
      height:170  ,
      borderRadius:10
      },

      texte:{
        textAlign:'center',
        fontSize:30,
        color:'white'
      }
})