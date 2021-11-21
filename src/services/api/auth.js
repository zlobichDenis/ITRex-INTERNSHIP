import { api } from "./instance";

export const registration = (userData) => (
    api.post("auth/registration", userData)
        .then((responce) => ({ responce }))
        .catch((error) => ({ error }))
);

export const login = (userData) => (
    api.post("auth/login", userData)
        .then((responce) => ({ responce }))
        .catch((error) => ({ error }))
);

export const getUserProfile = (token) => (
    api.get("auth/profile", {
        headers: {
            'Authorization': `Bearer ${token}`,
        }})
        .then((responce) => ({ responce }))
        .catch((error) => ({ error }))
);