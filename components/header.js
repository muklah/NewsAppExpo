import React, { Component } from "react"
import { View, Image, Text } from "react-native"

export default class Header extends Component {
    render() {
        return ( 
        <View style={{ height:60, flexDirection:"row", backgroundColor:"red"}}>
        <Image style={{ height: 60 }} resizeMode="cover" source={require("../assets/icon.png")} />
        <Text>News Application</Text>
        </View>
        );
    }
}