import { put, takeLatest, call } from "redux-saga/effects";

import { createAppointment } from "services";
import { postNewAppointment, responcePostAppointment, rejectPostAppointment } from "..";

export function* createAppointmentWorker({ payload }: any) {
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
