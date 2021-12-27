import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { fetchAllDoctorAppointments, fetchAllPatientAppointments } from 'services';
import { errorNotify } from "notification";
import { FetchDataList } from "types";
import { ErrorMessages } from "dictionary";
import {
  fetchDoctorAppointments,
  fetchPatientAppointments,
  setUserAppointments,
  rejectFetchAppointments,
  responseFetchAppointments,
} from '../appointmentsSlice';


function* fetchPatientAppointmentsWorker({ payload }: PayloadAction<FetchDataList>) {
  const { response: patientResponse } = yield call(fetchAllPatientAppointments, payload);

  if (patientResponse) {
    const { data: appointments } = patientResponse;
    yield put(responseFetchAppointments());
    yield put(setUserAppointments(appointments.appointments));
  } else {
    errorNotify(ErrorMessages.FETCH_DATA);
    yield put(rejectFetchAppointments());
  }
}

function* fetchDoctorAppointmentsWorker({ payload }: PayloadAction<FetchDataList>) {
  const { response: doctorResponse } = yield call(fetchAllDoctorAppointments, payload);

  if (doctorResponse) {
    const { data: appointments } = doctorResponse;
    yield put(responseFetchAppointments());
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
