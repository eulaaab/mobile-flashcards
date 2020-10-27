import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { getDecks, getDeck, saveDeckTitle, addCardToDeck } from "../utils/helpers"
//import {getDecks} from "../utils/api";
import { receiveDecks } from "../actions"
import { connect } from "react-redux"

class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>This is the Deck List View.</Text>
      </View>
    )
  }
}

export default DeckList;