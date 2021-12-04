import axios from "axios";

import * as tokenRepository from "store/tokenRepository";

export const api = axios.create({
  baseURL: "https://reactlabapi.herokuapp.com/api/",
  timeout: 1000,
});

api.interceptors.request.use(async config => {
  config.headers = { 
    'Authorization': `Bearer ${tokenRepository.getToken()}`,
    "Access-Control-Allow-Origin": "*",
    accept: "application/json",
    "Content-Type": "application/json",
  }
  return config;
});

