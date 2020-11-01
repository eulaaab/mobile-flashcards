import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import DeckList from "./components/DeckList"
import TextButton from "./components/TextButton"
import { createStore, } from 'redux';
import middleware from './middleware'
import { Provider } from "react-redux";
import reducer from "./reducers";
import { getDecks, saveDeckTitle, addCardToDeck, getDeck, removeDecks } from "./utils/api"
import styled from "styled-components"
import { handleInitialData } from "./actions/index"
import { orange, white, purple } from "./utils/colors"

export default class App extends Component {
  state = {
    data: {}
  }
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData())
  // }
  componentDidMount() {
    this.handleGetDecks();
  }

  handleGetDecks = () => {
    getDecks("Redux").then(res => {
      console.log('all decks', JSON.stringify(res))
      this.setState(() => ({
        data: res
      }))
    }).catch(err => {
      console.log('error in getting decks', err)
    })
  }

  handleGetDeck = () => {
    getDeck().then(res => {
      console.log("a deck", JSON.stringify(res))
      this.setState({
        data: res
      })
    })
  }

  handleSaveDeck = () => {
    saveDeckTitle("Test")
  }

  handleAddCardToDeck = () => {
    addCardToDeck("Test", {
      question: "question",
      answer: "answer"
    })
  }


  handleRemoveDecks = () => {
    removeDecks()
  }
  render() {
    const store = createStore(reducer);
    // const data = this.state;
    return (
      <Provider store={store}>
        < View style={[{ flex: 1 }, styles.container]} >
          <DeckList decks={this.state.data} />

          {
            /*
          <TouchableOpacity style={styles.btn} onPress={this.handleGetDecks}>
            <Text style={styles.btn}>
              Deck List
                </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.handleGetDeck}>
            <Text style={styles.btn}>
              Deck
                </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.handleSaveDeck}>
            <Text style={styles.btn}>
              Save Deck Title
                </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.handleAddCardToDeck}>
            <Text style={styles.btn}>
              Add Card To Deck
                </Text>
          </TouchableOpacity>     
            */
          }
        </View >
      </Provider>
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
  btn: {
    // padding: 5,
    backgroundColor: orange,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
});
