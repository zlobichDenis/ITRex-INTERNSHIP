import axios from 'axios';

import * as tokenRepository from 'store/tokenRepository';

export const api = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
  timeout: 3000,
});

api.interceptors.request.use(async config => {
  const accessToken = tokenRepository.getToken();
  if (accessToken) {
    config.headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
      'Content-Type': 'application/json',
    }
  } else {
    config.headers = {
      'Authorization': ``,
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }
  return config;
});

api.interceptors.response.use(
  (responce) => responce,
  async (error) => {
    if (error.request.status === 401 || !error.status) {
      localStorage.removeItem('persist:user');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
  }
)

