import { put, takeLatest, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  setCurrentUser,
  fetchUserProfile,
  responceFetchUserProfile,
  rejectFetchUserProfile,
  fetchLogin,
  fetchRegistration,
} from "..";
import { SignUpFormValues, SignInFormValues } from "types";
import { responceNotify, errorNotify } from "notification";
import { SuccessMessages, ErrorMessages } from "dictionary";
import { login, fetchUserData, registration } from "services";
import * as tokenRepository from "store/tokenRepository";
import { getCorrectPage } from "../../helpers";

type RegistartionSagaParams = SignUpFormValues;
type LoginSagaParams = SignInFormValues;

function* registrationWorker({ payload }: PayloadAction<RegistartionSagaParams>) {
  const { responce: tokenResponce } = yield call(registration, payload);

  if (tokenResponce) {
    responceNotify(SuccessMessages.REGISTRATION);
    tokenRepository.setToken(tokenResponce.data.access_token);
    tokenRepository.setRefreshToken(tokenResponce.data.refresh_token);
    yield put(fetchUserProfile());
  } else {
    errorNotify(ErrorMessages.REGISTRATION);
    yield put(rejectFetchUserProfile());
  }
}

function* loginWorker({ payload }: PayloadAction<LoginSagaParams>) {
  const { responce: tokenResponce }  = yield call(login, payload);

  if (tokenResponce) {
    responceNotify(SuccessMessages.LOGIN);
    tokenRepository.setToken(tokenResponce.data.access_token);
    tokenRepository.setRefreshToken(tokenResponce.data.refresh_token);
    yield put(fetchUserProfile());
  } else {
    errorNotify(ErrorMessages.LOGIN);
    yield put(rejectFetchUserProfile());
  }
}

function* getUserProfileWorker() {
  const { responce: userProfileResponce } = yield call(fetchUserData);

  if (userProfileResponce) {
    yield put(responceFetchUserProfile());
    const {data: userProfile } = userProfileResponce;
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
