import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchDoctorAppointments, setUserAppointments } from '../slice';
import { getAllDoctorAppointments } from 'services';

export function* getAllDoctorAppointmentsWorker({ payload }) {
  const { responce, error } = yield call(getAllDoctorAppointments, payload);
  if (responce) {
    const { data: appointments } = responce;
    yield put(setUserAppointments(appointments.appointments));
  } else {
    yield put(setUserAppointments([]));
  }
};

export function* getAllDoctorAppointmentsWatcher() {
  yield takeEvery(fetchDoctorAppointments, getAllDoctorAppointmentsWorker);
};