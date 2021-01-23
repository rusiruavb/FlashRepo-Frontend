import { CREATE_CARD, FETCH_CARD } from "../actions";

const initialState = {
  cards: [],
  card: {}
}

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CARD:
      return {...state, card: action.payload};
    case FETCH_CARD:
      return {...state, cards: action.payload};
    default:
      return state;
  }
}

export default cardReducer;