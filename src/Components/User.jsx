import React from 'react'
import axios from "axios";
export const SET_USER = "SET_USER";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function fetchUser(id) {
  return function (dispatch) {
    axios
      .get(`/api/users/${id}`)
      .then((response) => {
        dispatch({ type: "FETCH_USER_FULFILLED", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_USER_REJECTED", payload: err });
      });
  };
}

const User = () => {
  return (
    <div>User</div>
  )
}

export default User