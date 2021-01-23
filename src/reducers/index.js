import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import cardReducer from "./cardReducer";

const allReducers = combineReducers({
  user: userReducer,
  card: cardReducer
})

export default allReducers;