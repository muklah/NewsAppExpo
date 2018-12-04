import React, { Component } from "react"
import { View, StyleSheet } from "react-native"
import { Constants } from "expo"
import Header from "../components/header"
import SearchBar from "../components/searchBar"
import NewsList from "../components/newsList"

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        this.search("iraq")
    }

    search(q) {
        fetch('https://newsapi.org/v2/everything?q=${q}&apiKey=6abfc2fbdbaf41f4bca92b5c025b68e8')
            .then(res => res.json())
            .then(news => {
                this.setState({ news: news.articles });
            }).catch((err) => {
                console.log(err)
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <SearchBar searchFun={this.search.bind(this)} />
                <NewsList news={this.state.news} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    }
})