import AsyncStorage from '@react-native-community/async-storage'
import { decks } from "./_DATA"

//how we're going to persist information
export const DECKS_STORAGE_KEY = "MobileFlashcards:decks"

export function getData() {
  return decks;
}

function formatDeckResults(res) {
  return res === null ? decks : JSON.parse(res);
}

//getDecks - return all of the decks along with their titles, questions, and answers. getItem
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDeckResults)
}

// getDeck - takes a single id, argument and return the deck associated with the id. getItem
export function getDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(res => {
    return JSON.parse(DECKS_STORAGE_KEY)[id]
  }).catch(err => {
    console.log("error in getDeck", err)
  })
}

//saveDeckTitle - take a single title argument and add it to the deck. mergeItem to decks to NewDecks
export function saveDeckTitle(title) {
  return getDecks()
    .then((decks) => {
      return {
        ...decks,
        [title]: {
          title,
          questions: []
        }
      }
    })
    .then(res => {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(res))
    })
    .catch(err => {
      console.log("error in getDeck", err)
    })
}

//addCardToDeck - take in two arguments, title, and card, and will add the card to the list of questions for the deck with the associated title. setItem
export function addCardToDeck({ title, card }) {
  getDecks()
    .then((decks) => {
      return {
        ...decks,
        [title]: {
          questions: [...decks.questions].concat(card)
        }
      }
    }).then(res => {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(res))
    }).catch(err => {
      console.log('error in addCardToDeck', err)
    })
}

//remove Decks
export function removeDecks(){
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY)
  .catch(err => {
    console.log("error in removeDeck", err)
  })
}