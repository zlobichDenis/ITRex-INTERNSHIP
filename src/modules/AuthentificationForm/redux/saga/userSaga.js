import { put, takeEvery, call } from 'redux-saga/effects';

import { setCurrentUser, fetchUserProfile } from 'modules';
import { login, getUserProfile } from "services";

export function* getUserData({ payload }) {
    const { data: tokens } = yield call(login, payload);
    sessionStorage.setItem("access_token", tokens.access_token)
    const { data: userProfile } = yield call(getUserProfile, tokens.access_token);
    yield put(setCurrentUser(userProfile))
};

export function* getUserDataWatcher() {
    yield takeEvery(fetchUserProfile, getUserData);
};