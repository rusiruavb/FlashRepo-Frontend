import axios from "axios";
import {
  CREATE_USER,
  FETCH_USER_ACCOUNT,
  USER_LOGIN
} from "./index";


export function createUser(user) {
  return function (dispatch) {
    axios.post(`${process.env.REACT_APP_BACKEND_API_LOCAL}/user/createacc`, user)
      .then(data => dispatch({
        type: CREATE_USER,
        payload: data
      }))
      .catch(error => console.log(error.message))
  }
}

export function getUserData() {
  return function (dispatch) {
    fetch(`${process.env.REACT_APP_BACKEND_API_LOCAL}/user/getacc`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    })
      .then(res => res.json())
      .then(user => dispatch({
        type: FETCH_USER_ACCOUNT,
        payload: user
      }))
  }
}

export function loginUser(information) {
  return function (dispatch) {
    axios.post(`${process.env.REACT_APP_BACKEND_API_LOCAL}/user/login`, information)
      .then((res) => {
        localStorage.setItem("Authorization", res.data.token)
      })
      .then(data => dispatch({
        type: USER_LOGIN,
        payload: data
      }))
      .then(() => {
        window.location = "/me"
      })
  }
}
