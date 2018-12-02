import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class Header extends Component {
    render() {
        return ( 
        <View style={styles.container}>
        <TextInput style={styles.searchBar} value={' Search'}/>
        </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 0.15,
        backgroundColor: 'white'
    },
    searchBar:{
        height: 40,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        margin: 10,
        }
})