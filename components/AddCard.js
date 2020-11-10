import React, { Component } from 'react';
import { View, Text, TextInput } from "react-native";
import TextButton from "./TextButton"
import {white, purple} from "../utils/colors"


export default class AddCard extends Component {

  //TODO: handleSubmit
  render() {
    return (
      <View style={{paddingTop: 300}}>
        <Text style={{ color: purple, fontSize:30, fontWeight: "700", marginBottom:20, alignSelf: "center"}}>Add Card to Deck</Text>
        <TextInput style={{ fontSize: 20, borderWidth: 1, backgroundColor: white, borderRadius: 5, height: 40, padding: 20, margin: 20}}
          placeholder="Question"/>
        <TextInput style={{ fontSize: 20, borderWidth: 1, backgroundColor: white, borderRadius: 5, height: 40, padding: 20, margin: 20 }}
          placeholder="Answer"/>
        <TextButton>Create Card</TextButton>
      </View>
    )
  }
}
