import React from "react";
import axios from "axios";

const URL_LOGIN = "https://fakestoreapi.com/auth/login";
const URL_USER = "https://fakestoreapi.com/users";

export const login = (credentials) => {
  console.log("login service", JSON.stringify(credentials));
  const user = axios
    .post(URL_LOGIN, credentials)
    .then((res) => res.json())
    .then((data) => data);
  return user;
};

export const getUser = (id) => {
  const user = axios.get(`${URL_USER}/${id}`)
    .then(res => res)
    // .then(data => data);
  return user;
};
