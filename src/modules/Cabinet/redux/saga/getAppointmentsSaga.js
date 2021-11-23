import { put, takeEvery, call } from 'redux-saga/effects';

import { getAllDoctorAppointments, getAllPatientAppointments } from 'services';
import { setError } from 'store';
import * as tokenRepository from "store/tokenRepository";
import { fetchDoctorAppointments, fetchPatientAppointments, setUserAppointments } from '../slice';

export function* getAppointmentsWorker({ type, payload }) {
  let responce;
  let error;
  const token = tokenRepository.getToken();

  switch (type) {
    case fetchDoctorAppointments.type:
      const { responce: doctorResponce, error: doctorError } = yield call(getAllDoctorAppointments, [...payload, token]);
      responce = doctorResponce;
      error = doctorError;
      break;
    case fetchPatientAppointments.type:
      const { responce: patientResponce, error: patientError } = yield call(getAllPatientAppointments, [...payload, token]);
      responce = patientResponce;
      error = patientError;
      break;
  }
  
  if (responce) {
    const { data: appointments } = responce;
    yield put(setUserAppointments(appointments.appointments));
  } else {
    yield put(setError(error.message));
  }
};

export function* getAppointmentsWatcher() {
  yield takeEvery(fetchDoctorAppointments, getAppointmentsWorker);
  yield takeEvery(fetchPatientAppointments, getAppointmentsWorker)
};