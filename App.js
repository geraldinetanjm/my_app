import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import Header from './components/header';

export default class App extends React.Component {
  render() {
    return (
      // Containter.
      <View style={styles.container}>
      <Header textIwant='Welcome' />
      <Header textIwant={'goodbye'} />
      <Header />
      <Avatar    
  xlarge
  rounded
  source={{ uri: 'file:///Users/Geraldine/Desktop/Gerodyssey/Transparentlogo.png' }}
  onPress={() => console.log('Geraldine')}
  activeOpacity={0.7}
      />
        <Text style={styles.bigblue}>GERALDINE</Text>
        <Button
title={'Hello'} 
        onPress={() => { console.log('happy'); }} 
      color="blue"
        
        />
      </View>
    );
  }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
    bigblue: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
    },
  
});
