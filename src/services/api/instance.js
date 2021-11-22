import axios from "axios";

export const api = axios.create({
  baseURL: "https://reactlabapi.herokuapp.com/api/",
  timeout: "1000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
