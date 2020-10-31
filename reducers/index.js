import { RECEIVE_DECKS, RECEIVE_CARDS, ADD_DECK, ADD_CARD, RECEIVE_CARD_ANSWER } from "../actions"

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      const { deck } = action
      return {
        ...state,
        decks: {
          ...state.decks,
          [deck.title]: deck
        }
      }
    case ADD_CARD:
      const { card, title } = action
      return {
        ...state,
        decks: {
          ...state.decks,
          [title]: {
            title: title,
            questions: state.decks[title].questions.concat(card)
          },
        }
      }
  }
}

export default decks;