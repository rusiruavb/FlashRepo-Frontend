import axios from "axios";
import { CREATE_CARD, FETCH_CARD, DELETE_CARD } from "./index";

export function createCard(cardData) {
  return function(dispatch) {
    console.log("Inside the create Card funciton")
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

export function deleteCard(cardID) {
  return function(dispatch) {
    fetch(`${process.env.REACT_APP_BACKEND_API_LOCAL}/card/delete/${cardID}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    })
      .then(res => res.json())
      .then(data=> dispatch({
        type: DELETE_CARD,
        payload: data
      }))
  }
}