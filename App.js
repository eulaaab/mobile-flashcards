import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import DeckList from "./components/DeckList"
import TextButton from "./components/TextButton"
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { getDecks, saveDeckTitle, addCardToDeck, getDeck } from "./utils/api"
import { orange, white, purple } from "./utils/colors"

export default class App extends Component {
  state = {
    data: "",
  }
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

  render() {
    //const store = createStore(reducer);
    const data = this.state;
    return (
      < View style={styles.container} >
        <TouchableOpacity style={styles.btn} onPress={this.handleGetDecks}>
          <TextButton>
            Deck List
            </TextButton>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.handleGetDeck}>
          <TextButton>
            Deck
            </TextButton>
        </TouchableOpacity>

        {
          /*
          <View>
          <Provider store={store}>
          
          </View>
          // </Provider>
          */
        }
        <View>
          <Text>{JSON.stringify(data)}</Text>
        </View>
      </View >
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
    padding: 10,
    backgroundColor: orange,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
});
