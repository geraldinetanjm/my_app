import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Avatar    
  xlarge
  rounded
  source={{uri: "file:///Users/Geraldine/Desktop/Gerodyssey/Transparentlogo.png"}}
  onPress={() => console.log("Geraldine")}
  activeOpacity={0.7}
/>
        <Text style={styles.bigblue}>Good dayy</Text>
        <Button title={'Hello'} 
        onPress={() => { console.log ('happy'); }} 
      color="blue"
        
        />
      </View>
    );
  }
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
    bigblue: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
    },
  
});
