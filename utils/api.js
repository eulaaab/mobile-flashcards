import { AsyncStorage } from "react-native"
import { decks } from "./_DATA"

//how we're going to persist information
export const DECKS_STORAGE_KEY = "MobileFlashcards:decks"

//getDecks - return all of the decks along with their titles, questions, and answers. getItem
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(res => {
    if (res === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
      return decks
    } else {
      return JSON.parse(results);
    }
  }).catch(err => {
    console.log('error on getDecks', err)
  }

  )
}

//getDeck - takes a single id, argument and return the deck associated with the id. getItem
export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(res => {
    return JSON.parse(DECKS_STORAGE_KEY)[id]
  }).catch(err => {
    console.log("error in getDeck", err)
  })
}

//saveDeckTitle - take a single title argument and add it to the deck. mergeItem to decks or setItem to NewDecks
export function saveDeckTitle(title) {

}

//addCardToDeck - take in two arguments, title, and card, and will add the card to the list of questions for the deck with the associated title. setItem
export function addCardToDeck({ title, card }) {
  return {
    //add the card to the list of questions
  }
}
