import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class TodoScreen extends React.Component {
    static navigationOptions = {
        title: 'To Do',
      };
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'colomn' }}>
        <View 
            style={{
                width: 150, 
                height: 200, 
                backgroundColor: 'powderblue' }} 
        />
        <View 
            style={{
                width: 50, 
                height: 50, 
                backgroundColor: 'skyblue' }} 
        />
        <View  
            style={{
                width: 50, 
                height: 50, 
                backgroundColor: 'steelblue' }} 
        />
      </View>
        );
    }
}
export default TodoScreen;
