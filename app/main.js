import React, { Component } from "react"
import { View, Text } from "react-native"
import { Constants } from "expo"
import Header from "../components/header"
import SearchBar from "../components/searchBar"
import NewsList from "../components/newsList"

export default class Main extends Component {
    render() {
        return (
        <View style={{flex:1, marginTop:Constants.statusBarHeight}}>
            <Header/>
            <SearchBar/>
            <NewsList/>
        </View>
        )
    }
}