import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { postDeletedAppointment  } from 'services';
import { responceNotify, errorNotify } from "notification";
import { PostNewResolution } from "types";
import { appointmentsPagination } from 'enums';
import { SuccessMessages, ErrorMessages } from 'dictionary';
import { deleteAppointment, fetchDoctorAppointments, postNewResolution } from '..';


function* deleteAppointmentWorker({ payload }: PayloadAction<string>) {
  const { response: deleteResponse } = yield call(postDeletedAppointment, payload);

  if (deleteResponse) {
    responceNotify(SuccessMessages.DELETE_APPOINTMENTS);
    yield put(fetchDoctorAppointments(appointmentsPagination));
  } else {
    errorNotify(ErrorMessages.DELETE_APPOINTMENTS);
  }
}

function* postNewResolutionWorker({ payload }: PayloadAction<PostNewResolution>) {
  const { response: resolutionResponse } = yield call(postNewResolution, payload);

  if (resolutionResponse) {
    responceNotify(SuccessMessages.CREATE_RESOLUTION);
    yield put(fetchDoctorAppointments(appointmentsPagination));
  } else {
    errorNotify(ErrorMessages.CREATE_RESOLUTION);
  }
}

export function* postAppointmentChangesWatcher() {
  yield takeLatest(deleteAppointment, deleteAppointmentWorker);
  yield takeLatest(postNewResolution, postNewResolutionWorker);
}