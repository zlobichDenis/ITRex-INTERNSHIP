import { api } from "./instance";

export const registration = (userData) => {
    api.post("auth/registration", userData)
        .then((res) => {
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token);
        });
};

export const login = (userData) => {
    api.post("auth/login", userData)
        .then((res) => console.log(res))
};

export const getUserProfile = () => {
    api.get("auth/profile")
        .then((res) => console.log(res))
};