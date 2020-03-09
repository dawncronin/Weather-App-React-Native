import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native";
import api from "./api"

import Forcast from "./Forcast"

export default class WeatherProject extends Component{
  constructor() {
    super()
    this.state = {
      zip: "",
      forcast: null
    }
  }

  handleInput = (e) => {
    let zip = e.nativeEvent.text
    api.fetchForcast(zip)
    .then(res => {
      console.log(res)
      this.setState({
        forcast: res})
    })
  }

  render() {
    let content = this.state.forcast ? <Forcast 
        main={this.state.forcast.main}
        description={this.state.forcast.description}
        temp={this.state.forcast.temp}
    /> : null
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Get your forcast:</Text>
        <TextInput style={styles.input} onSubmitEditing={this.handleInput}/>
        <Text>{this.state.zip}</Text>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 30,
    borderWidth: 2,
    height: 50,
    width: 100,
    padding: 5,
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
