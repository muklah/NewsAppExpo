import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: ""
        };
    }

    search(text = "iraq") {
        if (!text) {
            text = "";
        }
        this.setState({ value: text });
        this.props.searchFun(text);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.searchBar} value={this.state.value} 
                placeholder="Search Here" onChangeText={this.search.bind(this)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.15,
        backgroundColor: 'white'
    },
    searchBar: {
        height: 40,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        margin: 10,
    }
})