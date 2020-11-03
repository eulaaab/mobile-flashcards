import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import { white, red, purple } from "../utils/colors"
import TextButton from "./TextButton"

export default class DeckView extends Component {
  render() {
    return (
      <View style={{ paddingTop: 300, alignItems: "center" }}>
        <Text style={{ color: purple, fontSize: 45, fontWeight: "700", marginBottom: 20 }}>Deck Title</Text>
        <Text style={{ color: purple, fontSize: 25, marginBottom: 30 }}>Card Length</Text>
        <View>
          <TextButton>
            <Text style={{ color: white }}>Add Card</Text>
          </TextButton>
        </View>
        <View >
          <TextButton >
            <Text style={{ color: white }}>Start Quiz</Text>
          </TextButton>
        </View>
        <View >
          <Text style={{ color: red }}>Delete Deck</Text>
        </View>
      </View>
    )
  }
}
