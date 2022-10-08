import axios from "axios";

const API_USER = "https://reqres.in/api";

export const instance = axios.create({
  baseURL: API_USER,
});
