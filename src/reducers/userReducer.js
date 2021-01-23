import {CREATE_USER, FETCH_USER_ACCOUNT, UPDATE_USER, DELETE_USER, USER_LOGIN, USER_LOGOUT} from "../actions";

const initialState = {
  newuser: null,
  userData: {},
  logUser: {}
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return {...state, newuser: action.payload}
    case FETCH_USER_ACCOUNT:
      return {...state, userData: action.payload}
    case USER_LOGIN:
      return {...state, logUser: action.payload}
    default:
      return state;
  }
}

export default userReducer;