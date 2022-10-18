import axios from "axios";

// const API_USER = "https://reqres.in/api";

export const MyTurnAPI = axios.create({
  baseURL: "https://grupo23miturnoapi.herokuapp.com",
});
