import { put, takeLatest, call } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
  setCurrentUser,
  fetchUserProfile,
  responceFetchUserProfile,
  rejectFetchUserProfile,
  fetchLogin,
  fetchRegistration,
} from "..";
import { login, getUserProfile, registration } from "services";
import * as tokenRepository from "store/tokenRepository";
import { getCorrectPage } from "../common";



function* registrationWorker({ payload }) {
  const { responce: tokenResponce, error } = yield call(registration, payload);

  if (tokenResponce) {
    tokenRepository.setToken(tokenResponce.data.access_token);
    tokenRepository.setRefreshToken(tokenResponce.data.refresh_token);
    yield put(fetchUserProfile());
  } else {
    console.log(error)
    yield put(rejectFetchUserProfile());
  }
}

function* loginWorker({ payload }) {
  const { responce: tokenResponce, error }  = yield call(login, payload);

  if (tokenResponce) {
    tokenRepository.setToken(tokenResponce.data.access_token);
    tokenRepository.setRefreshToken(tokenResponce.data.refresh_token);
    yield put(fetchUserProfile());
  } else {
    console.log(error)
    yield put(rejectFetchUserProfile());
  }
}

function* getUserProfileWorker() {
  const { responce: userProfileResponce, error } = yield call(getUserProfile);

  if (userProfileResponce) {
    yield put(responceFetchUserProfile());
    const {data: userProfile } = userProfileResponce;
    yield put(setCurrentUser(userProfile));
    yield put(push(getCorrectPage(userProfile)));
  } else {
    console.log(error)
    yield put(rejectFetchUserProfile());
  }
}

export function* getUserDataWatcher() {
  yield takeLatest(fetchRegistration, registrationWorker);
  yield takeLatest(fetchLogin, loginWorker);
  yield takeLatest(fetchUserProfile, getUserProfileWorker);
}
