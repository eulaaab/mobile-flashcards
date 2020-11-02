import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import Deck from "./Deck"
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
      <ScrollView style={{paddingTop: 300}}>       
        {decks &&
          Object.values(decks).map((deck) => {
            return (
              <TouchableOpacity key={deck.title}>
                <Deck title={deck.title} questions={deck.questions} />
              </TouchableOpacity>

            );
          }
          )}

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 300, 
    paddingRight: 10,
    paddingLeft: 10, 
  }
})

function mapStateToProps({ decks }) {
  return {
    decks
  };
};
export default connect(mapStateToProps)(DeckList);