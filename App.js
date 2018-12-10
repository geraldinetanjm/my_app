import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from './components/header';
import Todo from './screen/Todo';
import Flexbox from './screen/Flexbox';

 class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      // Containter.
      <View style={styles.container}>
      <Header textIwant='Welcome' />
  <View style={{ padding: 10 }} />
      <Header textIwant={'About'} /> 
   <View style={{ padding: 15, backgroundColor: 'white' }} />  
      <Header />
      <Avatar    
      xlarge
      rounded
      source={{ uri: 'file:///Users/Geraldine/Desktop/Gerodyssey/Transparentlogo.png' }}
      onPress={() => console.log('Geraldine')}
      activeOpacity={0.7}
      />
    <View style={{ padding: 10 }} />
        <Text style={styles.bigblue}>GERALDINE</Text>
        <Button
          title="Go to Todo"
          onPress={() => this.props.navigation.navigate('TodoScreen')}
        />
        <Button
          title="Go to Flexbox"
          onPress={() => this.props.navigation.navigate('FlexboxScreen')}
        />
      </View>

    );
  }
}
const AppNavigator = createStackNavigator({
  Home: App, //Home page: the first start page 
  TodoScreen: Todo, //Todo page: the second page which you will navigate to 
  FlexboxScreen: Flexbox,
  });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer; // export default means the main function, everything will be under it 


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
