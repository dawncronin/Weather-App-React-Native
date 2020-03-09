import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native"

export default class Forcast extends Component{

    render() {
        return (
            <View style={Styles.container}>
                <Text>
                    {this.props.main}
                </Text>
                <Text>
                    {this.props.description}
                </Text>
                <Text>
                    {this.props.temp}°F
                </Text>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        height: 100,
    },
})


