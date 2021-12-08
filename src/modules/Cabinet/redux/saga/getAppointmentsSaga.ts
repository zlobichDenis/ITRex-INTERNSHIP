import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { getAllDoctorAppointments, getAllPatientAppointments } from 'services';
import {
  fetchDoctorAppointments,
  fetchPatientAppointments,
  setUserAppointments,
  rejectFetchAppointments,
  responceFetchAppointments,
  FetchAppointmentsPayload
} from '../slice';


export type GetAllAppointmentsWorkerParams = FetchAppointmentsPayload;

function* getPatientAppointmentsWorker({ payload }: PayloadAction<GetAllAppointmentsWorkerParams>) {
  const { responce: patientResponce } = yield call(getAllPatientAppointments, payload);

  if (patientResponce) {
    const { data: appointments } = patientResponce;
    yield put(responceFetchAppointments());
    yield put(setUserAppointments(appointments.appointments));
  } else {
    yield put(rejectFetchAppointments());
  }
}

function* getDoctorAppointmentsWorker({ payload }: PayloadAction<GetAllAppointmentsWorkerParams>) {
  const { responce: doctorResponce, error } = yield call(getAllDoctorAppointments, payload);

  if (doctorResponce) {
    const { data: appointments } = doctorResponce;
    yield put(responceFetchAppointments());
    yield put(setUserAppointments(appointments.appointments));
  } else {
    yield put(rejectFetchAppointments());
  }
}

export function* getAppointmentsWatcher() {
  yield takeLatest(fetchDoctorAppointments, getDoctorAppointmentsWorker);
  yield takeLatest(fetchPatientAppointments, getPatientAppointmentsWorker);
}
