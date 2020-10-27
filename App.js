import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import DeckList from "./components/DeckList"
import TextButton from "./components/TextButton"
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { getDecks, saveDeckTitle, addCardToDeck } from "./utils/api"
import { orange, white, purple } from "./utils/colors"

export default class App extends Component {
  state = {
    decks: "",
  }
  componentDidMount() {
    this.handleGetDecks();
  }

  handleGetDecks = () => {
    getDecks().then(res => {
      console.log('all decks', JSON.stringify(res))
      this.setState(() => ({
        decks: res
      }))
    }).catch(err => {
      console.log('error in getting decks', err)
    })
  }

  render() {
    //const store = createStore(reducer);
    const decks = this.state;
    return (
      < View style={styles.container} >
        <TouchableOpacity style={styles.btn} onPress={this.handleGetDecks}>
          <TextButton>
            Deck List
            </TextButton>
        </TouchableOpacity>
        <DeckList />
        {
          /*
          <View>
          <Provider store={store}>
          
          </View>
          // </Provider>
          */
        }
        <View>
          <Text>{JSON.stringify(decks)}</Text>
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
