import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK } from "../actions"

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
    case REMOVE_DECK: {
      return {
        ...state,
        ...action.decks
      }
    }
    case ADD_CARD:
      const { card, title } = action.payload
      console.log('action', action.card, action.title,)
      return {
        ...state,
        decks: {
          ...state.decks,
          [title]: {
            title: title,
            questions: [...state.decks[title].questions.card]  //copy every question on that deck and then append the newly added card at the end.
          },
        }
      }
    default:
      return state;
  }
}

export default decks;