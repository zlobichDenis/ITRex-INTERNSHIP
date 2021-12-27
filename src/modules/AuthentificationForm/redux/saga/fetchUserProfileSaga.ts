import { put, takeLatest, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  setCurrentUser,
  fetchUserProfile,
  responseFetchUserProfile,
  rejectFetchUserProfile,
  fetchLogin,
  fetchRegistration,
} from "..";
import { SignUp, SignIn } from "types";
import { responceNotify, errorNotify } from "notification";
import { SuccessMessages, ErrorMessages } from "dictionary";
import { login, fetchUserData, registration } from "services";
import * as tokenRepository from "store/tokenRepository";
import { getCorrectPage } from "../../helpers";


function* registrationWorker({ payload }: PayloadAction<SignUp>) {
  const { response: tokenResponse } = yield call(registration, payload);

  if (tokenResponse) {
    responceNotify(SuccessMessages.REGISTRATION);
    tokenRepository.setToken(tokenResponse.data.access_token);
    tokenRepository.setRefreshToken(tokenResponse.data.refresh_token);
    yield put(fetchUserProfile());
  } else {
    errorNotify(ErrorMessages.REGISTRATION);
    yield put(rejectFetchUserProfile());
  }
}

function* loginWorker({ payload }: PayloadAction<SignIn>) {
  const { response: tokenResponse }  = yield call(login, payload);

  if (tokenResponse) {
    responceNotify(SuccessMessages.LOGIN);
    tokenRepository.setToken(tokenResponse.data.access_token);
    tokenRepository.setRefreshToken(tokenResponse.data.refresh_token);
    yield put(fetchUserProfile());
  } else {
    errorNotify(ErrorMessages.LOGIN);
    yield put(rejectFetchUserProfile());
  }
}

function* getUserProfileWorker() {
  const { response: userProfileResponse } = yield call(fetchUserData);

  if (userProfileResponse) {
    yield put(responseFetchUserProfile());
    const {data: userProfile } = userProfileResponse;
    yield put(setCurrentUser(userProfile));
    yield put(push(getCorrectPage(userProfile)));
  } else {
    yield put(rejectFetchUserProfile());
  }
}

export function* getUserDataWatcher() {
  yield takeLatest(fetchRegistration, registrationWorker);
  yield takeLatest(fetchLogin, loginWorker);
  yield takeLatest(fetchUserProfile, getUserProfileWorker);
}
