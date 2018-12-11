import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, SectionList } from 'react-native';

class TodoScreen extends React.Component {
    static navigationOptions = {
        title: 'ABOUT',
      };
    renderRow = ({ item }) => 
      (<View style={styles.row}>
        <Text>{item.text}</Text>
        </View>);

    renderSectionHeader = ({ section }) =>
        (<View style={styles.header}>
            <Text>{section.title}</Text>
        </View>); 

    render() {
        return (
            <SectionList
                sections={sections}
                renderItem={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
            />
            // <ScrollView>
                //<View style={styles.container1} />
                //<View style={styles.container2} />
                //<View style={styles.container3} />
            
            //</ScrollView>
        );
    }
}
const sections = [ 
    { 
        id: 0, 
        title: 'Section 1', 
        data: 
            [ 
             { id: 0, text: 'Item 1' }, 
             { id: 1, text: 'Item 2' },
             { id: 2, text: 'Item 3' },
            ] 
        },

    { id: 1, title: 'Section 2', 
        data: 
        [
            { id: 3, text: 'Item 4' }, 
            { id: 4, text: 'Item 5' }
        ] 
    }
    ];
    

const styles = StyleSheet.create({
    container1: {
        padding: 100, 
        backgroundColor: 'blue'
    },
    //container2: {
        //padding: 100, 
        //backgroundColor: 'red'
    //},
    //container3: {
        //padding: 100, 
        //backgroundColor: 'yellow'
    //},
    // above is for the scrollview
    header: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue',
        fontWeight: 'bold',
    },
    row: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'pink',
        color: 'black'
    }
});
export default TodoScreen;
