import React, { Component } from "react";
import { View, TextInput } from "react-native";

export default class Header extends Component {
    render() {
        return ( 
        <View style={{ flex: 0.15, backgroundColor: "green" }}>
        <TextInput />
        </View>
        );
    }
}