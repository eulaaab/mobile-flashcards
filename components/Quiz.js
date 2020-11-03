import React, { Component } from 'react'
import { View, Text } from "react-native"
import TextButton from "./TextButton"
import { purple, lightGreen, lightOrange } from "../utils/colors"

export default class Quiz extends Component {
  render() {
    return (
      <View style={{ paddingTop: 300, alignItems: "center" }}>
        <Text style={{ color: purple, fontSize: 40, fontWeight: "700", marginBottom: 20 }}>Card Question</Text>
        <Text style={{ color: purple, fontSize: 30, marginBottom: 10 }}>Answer:</Text>
        <View>
          <TextButton >
            <Text style={{ color: lightGreen }}>Correct</Text>
          </TextButton >
        </View>
        <View >
          <TextButton >
            <Text style={{ color: lightOrange }}>Incorrect</Text>
          </TextButton>
        </View>
      </View>
    )
  }
}
