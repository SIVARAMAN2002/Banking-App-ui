import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { useState } from 'react';

export default function Home()
{
    const [people, setPeople] = useState([
        { name: 'Medical shop',amount:-300, id: '1' },
        { name: 'Gym',amount:-200, id: '2' },
        { name: 'Siva',amount:+200, id: '3' },
        { name: 'home rent',amount:-3000, id: '4' },
        { name: 'Electricty',amount:-3000, id: '5' },
        { name: 'Restaurant',amount:-700, id: '6' },
        { name: 'cyilinder',amount:-800, id: '7' },
        { name: 'milk',amount:-200, id: '8' },
        { name: 'Textile Shop',amount:-1000, id: '9' },
        { name: 'SRIRAM',amount:+800, id: '10' },
        { name: 'ashief',amount:+1200, id: '11' },
        
      ]);

      const Item = ({ title ,amount}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.re}>{amount}</Text>
        </View>
      );
      
     
        const renderItem = ({ item }) => (
          <Item title={item.name} amount={item.amount}/>
         
        );

      return(
        <View style={styles.lid}>
          <Text style={styles.ush}>Transaction</Text>
            <FlatList
             numColumns={1}
             keyExtractor={(item) => item.id} 
             data={people} 
             renderItem={renderItem}
            />
        </View>
      );

}

const styles = StyleSheet.create({

  item: {
    flex:1,
    backgroundColor: 'white',
   
    marginVertical: 8,
    marginHorizontal: 16,
    display:'flex',
    borderRadius:10,
    padding:3
  },
  title: {
    flex:1,

 
  },
  lid:{
    marginTop:10,
    borderRadius:10,
    backgroundColor:'#03a89e'
  },
  re:{
  marginLeft:260,
  marginTop:-15
  },
  ush:{
    fontSize:25,
    padding:10
  }

});