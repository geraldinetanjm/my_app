import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

class TodoScreen extends React.Component {
    static navigationOptions = {
        title: 'ABOUT',
      };
    render() {
        return (
            <ScrollView>
                <View style={styles.container1} />
                <View style={styles.container2} />
                <View style={styles.container3} />
            
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        padding: 100, 
        backgroundColor: 'blue'
    },
    container2: {
        padding: 100, 
        backgroundColor: 'red'
    },
    container3: {
        padding: 100, 
        backgroundColor: 'yellow'
    }
});
export default TodoScreen;
