import { put, takeEvery, call } from 'redux-saga/effects';

import { getAllDoctorAppointments, getAllPatientAppointments } from 'services';
import { setError } from 'store';
import { fetchDoctorAppointments, fetchPatientAppointments, setUserAppointments } from '../slice';

export function* getAppointmentsWorker({ type, payload }) {
  let responce;
  let error;

  switch (type) {
    case fetchDoctorAppointments.type:
      const { responce: doctorResponce, error: doctorError } = yield call(getAllDoctorAppointments, payload);
      responce = doctorResponce;
      error = doctorError;
      break;
    case fetchPatientAppointments.type:
      const { responce: patientResponce, error: patientError } = yield call(getAllPatientAppointments, payload);
      responce = patientResponce;
      error = patientError;
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