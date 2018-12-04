import React, { Component } from "react"
import { View, Image, Text, StyleSheet } from "react-native"

export default class NewsItem extends Component {
    render() {
        let { item } = this.props;
        const { title, urlToImage, description, publishedAt } = item;
        return (
            <View style={styles.itemNewsContainer}>
                <Image style={styles.image} resizeMode="cover" source={{ uri: urlToImage }} />
                
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.publishedAt}>{publishedAt}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemNewsContainer: {
        flexDirection: "row",
        padding: 10
    },
    content: {
        flexDirection: "column",
        flex: 1,
        paddingLeft: 10
    },
    image: {
        height: 70,
        width: 100
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16
    },
    publishedAt: {
        fontSize: 14,
        paddingTop: 15
    }
})