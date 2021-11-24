import { api } from "services";

import * as tokenRepository from "store/tokenRepository";
import updateAccessToken from "../interceptors";

api.interceptors.request.use((responce) => {
    return responce
}, async (error) => {
    if (error.responce.status === 403) {
        const newAccesToken = updateAccessToken(tokenRepository.getRefreshToken());
        tokenRepository.setToken(newAccesToken);
    }
})