import { put, takeLatest, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { createAppointment, CreateAppointmentParams, responceNotify, errorNotify } from "services";
import { SuccesMessages, ErrorMessages } from "dictionary";
import { postNewAppointment, responcePostAppointment, rejectPostAppointment } from "..";


export function* createAppointmentWorker({ payload }: PayloadAction<CreateAppointmentParams>) {
  const { responce } = yield call(createAppointment, payload);
  
  if (responce) {
    responceNotify(SuccesMessages.CREATED_APPOINTMENT);
    yield put(responcePostAppointment());
  } else {
    errorNotify(ErrorMessages.CREATED_APPOINTMENTS)
    yield put(rejectPostAppointment());
  }
}

export function* createAppointmentWatcher() {
  yield takeLatest(postNewAppointment, createAppointmentWorker);
}
