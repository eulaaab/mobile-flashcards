import React, { Component } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"
import Deck from "./Deck"
import styled from "styled-components"
import { handleInitialData } from "../actions/"

class DeckList extends Component {
  componentDidMount() {
    console.log('decks from CptDidMount', this.props.decks)
    this.props.dispatch(handleInitialData())
  }
  render() {
    console.log('decks', decks)
    const { decks } = this.props;
    return (
      <View>
        <TextStyle>This is the Deck List View.</TextStyle>
        {decks &&
          Object.values(decks).map((deck) => {
            return (
              <View key={deck.title}>
                <Text>{deck.title}</Text>
              </View>
            );
          }
          )}
        <Deck />
        <Deck />
        <Deck />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20
  }
})

const CenterView = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background: #333
`
const TextStyle = styled.Text`
color: #333;
font-size: 20;
`

function mapStateToProps({decks}) {
  return {
    decks
  };
};
export default connect(mapStateToProps)(DeckList);