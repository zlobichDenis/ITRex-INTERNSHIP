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
        }
    })
        // .then(({ data }) => {
        //     sessionStorage.setItem("access_token", data.access_token);
        //     sessionStorage.setItem("refresh_token", data.refresh_token)
        // })
);