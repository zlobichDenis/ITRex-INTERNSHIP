import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { postDeletedAppointment, errorNotify, responceNotify, postNewResolution  } from 'services';
import { appointmentsPagination } from 'const';
import { SuccesMessages, ErrorMessages } from 'dictionary';
import { deleteAppointment, fetchDoctorAppointments, CreateResolutionPayload, createResolution } from '..';


export type CreateResolutionWorkerParams = CreateResolutionPayload;

function* deleteAppointmentWorker({ payload }: PayloadAction<string>) {
  const { responce: deleteResponce } = yield call(postDeletedAppointment, payload);

  if (deleteResponce) {
    responceNotify(SuccesMessages.DELETE_APPOINTMENTS);
    yield put(fetchDoctorAppointments(appointmentsPagination));
  } else {
    errorNotify(ErrorMessages.DELETE_APPOINTMENTS);
  }
}

function* createResolutionWorker({ payload }: PayloadAction<CreateResolutionWorkerParams>) {
  const { responce: resolutionResponce } = yield call(postNewResolution, payload);

  if (resolutionResponce) {
    responceNotify(SuccesMessages.CREATE_RESOLUTION);
    yield put(fetchDoctorAppointments(appointmentsPagination));
  } else {
    errorNotify(ErrorMessages.CREATE_RESOLUTION);
  }
}

export function* postAppointmentChangesWatcher() {
  yield takeLatest(deleteAppointment, deleteAppointmentWorker);
  yield takeLatest(createResolution, createResolutionWorker);
}