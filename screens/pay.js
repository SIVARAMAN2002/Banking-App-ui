import React, { useState } from 'react';
import { StyleSheet, Text, View ,ImageBackground,TextInput,ScrollView,FlatList,Modal} from 'react-native';
import { MaterialIcons,Ionicons,FontAwesome5,Feather,AntDesign  ,Foundation} from '@expo/vector-icons';

export default function Pay()
{

    const[st,setmodal]=useState(false);

    return(
       
    <View style={styles.se}>
         <View>
         <Modal visible={st}>
            <View>
                <Text>SOORY THIS SCREEN CANNOT BE DISPALYED PRESS HERE TO CLOSE</Text>
                <AntDesign name="rightcircle" size={24} color="black" style={styles.ssf} onPress={()=>
        {
            setmodal(false);
        }} />
                </View>  
            </Modal>
             </View>


        
          <Text style={styles.new}>NEW PAYMENT</Text>
          <AntDesign name="rightcircle" size={24} color="black" style={styles.ssf} onPress={()=>
        {
            setmodal(true);
        }} />
        </View>
    );
}


const styles=StyleSheet.create({
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