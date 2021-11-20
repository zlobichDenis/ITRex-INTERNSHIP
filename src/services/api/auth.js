import { api } from "./instance";

export const registration = (userData) => (
    api.post("auth/registration", userData)
);

export const login = (userData) => (
    api.post("auth/login", userData)
);

export const getUserProfile = (token) => (
    api.get("auth/profile", {
        headers: {
            'Authorization': `Bearer ${token}`,
        }})
);