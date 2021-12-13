import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { createAppointment, CreateAppointmentParams } from 'services';
import { responceNotify, errorNotify } from "notification";
import { SuccesMessages, ErrorMessages } from 'dictionary';
import { postNewAppointment, responcePostAppointment, rejectPostAppointment } from '..';

type CreateAppointmentWorkerParams = CreateAppointmentParams;

export function* createAppointmentWorker({ payload }: PayloadAction<CreateAppointmentWorkerParams>) {
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
