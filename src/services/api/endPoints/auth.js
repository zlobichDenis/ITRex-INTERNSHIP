import { api } from "../instance";

export const registration = (userData) =>
  api
    .post("auth/registration", userData)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const login = (userData) =>
  api
    .post("auth/login", userData)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getUserProfile = () =>
  api
    .get("auth/profile")
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
