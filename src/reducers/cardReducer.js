import { CREATE_CARD, FETCH_CARD, DELETE_CARD } from "../actions";

const initialState = {
  cards: [],
  card: {},
  deleteCard: null
}

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CARD:
      return {...state, card: action.payload};
    case FETCH_CARD:
      return {...state, cards: action.payload};
    case DELETE_CARD:
      return {...state, deleteCard: action.payload};
    default:
      return state;
  }
}

export default cardReducer;