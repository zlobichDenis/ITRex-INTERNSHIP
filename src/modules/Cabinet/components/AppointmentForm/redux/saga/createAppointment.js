import { put, takeEvery, call } from "redux-saga/effects";

import { createAppointment } from "services";
import { postNewAppointment } from "..";
import { setError } from "store";
import * as tokenRepository from "store/tokenRepository";

export function* createAppointmentWorker({ payload }) {
  const token = tokenRepository.getToken();
  const { responce, error } = yield call(createAppointment, [payload, token]);
  if (error) {
    yield put(setError(error.message));
  }
}

export function* createAppointmentWatcher() {
  yield takeEvery(postNewAppointment, createAppointmentWorker);
}
