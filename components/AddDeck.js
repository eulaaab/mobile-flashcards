import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import TextButton from "./TextButton";
import { white, purple } from "../utils/colors";

export default class AddDeck extends Component {
  render() {
    return (
      <View style={{ paddingTop: 300, alignItems: "center" }}>
        <Text style={{ color: purple, fontSize:30, fontWeight: "700", marginBottom:20, alignSelf: "center"}}>What is the Title of your deck?</Text>
        <TextInput style={{ fontSize: 20, borderWidth: 1, backgroundColor: white, borderRadius: 5, height: 40, padding: 20, }}
          placeholder="Title of Your Deck"
        />
        <View>
          <TextButton>
            <Text style={{ color: white }}>
              Create Deck
          </Text>
          </TextButton>
        </View>
      </View>
    )
  }
}
