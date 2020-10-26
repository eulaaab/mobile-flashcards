import React, { Component } from 'react'
import { View, Text } from "react-native"
import {getDecks, getDeck, saveDeckTitle, addCardToDeck} from "../utils/helpers"

class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>This is the Deck List View.</Text>
      </View>
    )
  }
}


export default DeckList
