import { put, takeEvery, call } from 'redux-saga/effects';

import { setCurrentUser, fetchUserProfile } from '..';
import { login, getUserProfile, registration } from "services";
import * as tokenRepository from "store/tokenRepository";
import { setError } from 'store';

export function* getUserData({ payload }) {
    const { userData, requestType } = payload;

    let tokenResponce;
    let tokenError;

    switch (requestType) {
        case "login":
            const { responce: loginRespone, error: loginError } = yield call(login, userData);
            tokenResponce = loginRespone;
            tokenError = loginError;
            break
        case "registration":
            const { responce: registrationResponce } = yield call(registration, userData);
            tokenResponce = registrationResponce;
            break;
    }

    if (tokenResponce) {
        const { data: tokens } = tokenResponce;
        tokenRepository.setToken(tokens.access_token);
        tokenRepository.setRefreshToken(tokens.refresh_token);
        const { responce: profileResponce, error: profileError } = yield call(getUserProfile, tokens.access_token);

        if (profileResponce) {
            const { data: userProfile } = profileResponce;
            yield put(setCurrentUser(userProfile));
        } else {
            yield put(setCurrentUser(profileError.message));
        }

    } else {
        yield put(setError(tokenError.message));
    }
};

export function* getUserDataWatcher() {
    yield takeEvery(fetchUserProfile, getUserData);
};