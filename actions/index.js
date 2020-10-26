/**
NOTES:
receive decks, receive cards, add deck, add card, receive answer, remove (?)
**/

export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const RECEIVE_CARDS = "RECEIVE_CARDS" 
export const ADD_DECK = "ADD_DECK" 
export const ADD_CARD = "ADD_CARD"
export const RECEIVE_CARD_ANSWER = "RECEIVE_CARD_ANSWER"

export function receiveDecks(decks){
  return {
    type:RECEIVE_DECKS,
    decks,
  }
}

export function receiveCards (cards){
  return {
    type: RECEIVE_CARDS,
    cards
  }
}

export function addDeck(deck) {
  return {
type: ADD_DECK,
deck
  }
}

export function addCard(card){
  return {
    type: ADD_CARD,
    card
  }
}

export function receiveCardAnswer(card){
  return {
    type: RECEIVE_CARD_ANSWER,
    card,
  }
}