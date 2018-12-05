import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// This is a stateless functional component 
//const Header =(props) => <Text>{ props textIwant }</Text>

//This is stateful functional component
class Header extends React.Component {
    constructor(props){ // Set state up
        super(props); // Run state
        //How we create properties 
        this.textIwant=props.textIwant;
    }

render (){
    return (
        <Text>{this.textIwant}</Text>
    );
}
}
export default Header;