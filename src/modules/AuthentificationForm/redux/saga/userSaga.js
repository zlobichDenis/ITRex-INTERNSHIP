import { put, takeEvery, call } from 'redux-saga/effects';

import { setCurrentUser, fetchUserProfile } from '..';
import { login, getUserProfile, registration } from "services";

export function* getUserData({ payload }) {
    const { userData, requestType } = payload;

    let tokenResponce;

    switch (requestType) {
        case "login":
            const { responce: loginRespone } = yield call(login, userData);
            tokenResponce = loginRespone;
            break
        case "registration":
            const { responce: registrationResponce } = yield call(registration, userData);
            tokenResponce = registrationResponce;
            break;
    }
    

    if (tokenResponce) {
        const { data: tokens } = tokenResponce;
        sessionStorage.setItem('access_token', tokens.access_token)
        const { responce: profileResponce } = yield call(getUserProfile, tokens.access_token);

        if (profileResponce) {
            const { data: userProfile } = profileResponce;
            yield put(setCurrentUser(userProfile));
        } else {
            yield put(setCurrentUser());
        }

    } else {
        yield put(setCurrentUser());
    }
};

export function* getUserDataWatcher() {
    yield takeEvery(fetchUserProfile, getUserData);
};