import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, AlertIOS } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

class FinalProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            data: [
                'Eat', 'Sleep', 'Grow', 'Fatter'
            ]
        };
    }

    remove = (index) => { 
        this.setState(
            prevState => {
                const data = prevState.data.slice();
                data.splice(index, 1);
                return { data };
            }
        );
    };


    // eslint-disable-next-line react/sort-comp

showForm = () => {
        AlertIOS.prompt(
            'Enter Text',
            null,
            text => this.add(text)
        );
}

add = (text) => {
    this.setState(
        prevState => {
            const { data } = prevState;
            return { 
                data: data.concat(text),
                text: ''
            };
        }
    );
}

    // AlertIOS.prompt(
        // 'Enter Text',
       //  'My Alert Msg',
        // [
           // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
           // { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            // { text: 'OK', onPress: () => console.log('OK Pressed') },
        //],
        //{ cancelable: false }

        renderRow = ({ item, index }) => (
            <View>
            <View style={styles.row} key={index}>
                    <Text>{item}</Text>
                    <TouchableOpacity
                        style={{
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            borderColor: '#32CD32'
                        }}
                    onPress={() => this.remove(index)}
                    // onPress={() => console.log(index)}
                    >
                        <Icon name="minus" type='font-awesome' />

                    </TouchableOpacity>    
            </View>
        </View>
        );


    render() {
        return (
            <View>
                <View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderRow}
                    keyExtractor={item => item.toString()}
                />
                </View>
            
            <View>
                <Button title="+" onPress={this.showForm} />
                
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    row: { padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue'
    },
});

export default FinalProject;
