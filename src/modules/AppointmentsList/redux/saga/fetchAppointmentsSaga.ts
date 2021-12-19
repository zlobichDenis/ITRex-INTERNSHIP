import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchAllDoctorAppointments, fetchAllPatientAppointments } from 'services';
import { errorNotify } from "notification";
import { ErrorMessages } from "dictionary";
import {
  fetchDoctorAppointments,
  fetchPatientAppointments,
  setUserAppointments,
  rejectFetchAppointments,
  responceFetchAppointments,
  FetchAppointmentsPayload
} from '../appointmentsSlice';


export type GetAllAppointmentsWorkerParams = FetchAppointmentsPayload;

function* fetchPatientAppointmentsWorker({ payload }: PayloadAction<GetAllAppointmentsWorkerParams>) {
  const { responce: patientResponce } = yield call(fetchAllPatientAppointments, payload);

  if (patientResponce) {
    const { data: appointments } = patientResponce;
    yield put(responceFetchAppointments());
    yield put(setUserAppointments(appointments.appointments));
  } else {
    errorNotify(ErrorMessages.FETCH_DATA);
    yield put(rejectFetchAppointments());
  }
}

function* fetchDoctorAppointmentsWorker({ payload }: PayloadAction<GetAllAppointmentsWorkerParams>) {
  const { responce: doctorResponce } = yield call(fetchAllDoctorAppointments, payload);

  if (doctorResponce) {
    const { data: appointments } = doctorResponce;
    yield put(responceFetchAppointments());
    yield put(setUserAppointments(appointments.appointments));
  } else {
    errorNotify(ErrorMessages.FETCH_DATA);
    yield put(rejectFetchAppointments());
  }
}

export function* fetchAppointmentsWatcher() {
  yield takeLatest(fetchDoctorAppointments, fetchDoctorAppointmentsWorker);
  yield takeLatest(fetchPatientAppointments, fetchPatientAppointmentsWorker);
}
