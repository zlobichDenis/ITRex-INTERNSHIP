import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { postCreatedAppointment } from 'services';
import { PostNewAppointmentParams } from "types";
import { responceNotify, errorNotify } from "notification";
import { SuccessMessages, ErrorMessages } from 'dictionary';
import { postNewAppointment, responsePostAppointment, rejectPostAppointment } from '..';


export function* createAppointmentWorker({ payload }: PayloadAction<PostNewAppointmentParams>) {
  const { response } = yield call(postCreatedAppointment, payload);
  
  if (response) {
    responceNotify(SuccessMessages.CREATED_APPOINTMENT);
    yield put(responsePostAppointment());
  } else {
    errorNotify(ErrorMessages.CREATED_APPOINTMENTS)
    yield put(rejectPostAppointment());
  }
}

export function* createAppointmentWatcher() {
  yield takeLatest(postNewAppointment, createAppointmentWorker);
}
