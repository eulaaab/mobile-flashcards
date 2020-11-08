import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import Deck from "./Deck"
import { handleInitialData } from "../actions/"
import { NavigationContainer } from '@react-navigation/native'



class DeckList extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { questions, decks, navigation } = this.props;
    // console.log('decks', this.props.decks)
    return (
      <ScrollView style={styles.container}>
        {decks &&
          Object.values(decks).map((deck) => {
            return (
              <TouchableOpacity key={deck.title} onPress={() => navigation.navigate("DeckView", { title: deck.title })}>{ }
                <Deck deck={deck} title={deck.title} />
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