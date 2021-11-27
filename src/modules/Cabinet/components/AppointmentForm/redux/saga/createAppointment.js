import { put, takeLatest, call } from "redux-saga/effects";

import { createAppointment } from "services";
import { postNewAppointment, responcePostAppointment, rejectPostAppointment } from "..";
import * as tokenRepository from "store/tokenRepository";

export function* createAppointmentWorker({ payload }) {
  const token = tokenRepository.getToken();
  const { responce, error } = yield call(createAppointment, payload);
  
  if (responce) {
    yield put(responcePostAppointment());
  } else {
    yield put(rejectPostAppointment());
  }
}

export function* createAppointmentWatcher() {
  yield takeLatest(postNewAppointment, createAppointmentWorker);
}
