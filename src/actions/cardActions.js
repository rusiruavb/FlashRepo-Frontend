import axios from "axios";
import { CREATE_CARD, FETCH_CARD } from "./index";

export function createCard(cardData) {
  return function(dispatch) {
    axios.post(`${process.env.REACT_APP_BACKEND_API_LOCAL}/card/create`, cardData, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    })
      .then(data => dispatch({
        type: CREATE_CARD,
        payload: data
      }))
  }
}

export function fetchCards() {
  return function(dispatch) {
    fetch(`${process.env.REACT_APP_BACKEND_API_LOCAL}/card/get`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    })
      .then(res => res.json())
      .then(cards => dispatch({
        type: FETCH_CARD,
        payload: cards
      }))
  }
}