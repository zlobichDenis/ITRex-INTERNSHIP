import { FetchStatus } from './../../../../const/fetchStatus';
import { put, takeLatest, call } from "redux-saga/effects";

import { getAllDoctorAppointments, getAllPatientAppointments } from "services";
import {
  fetchDoctorAppointments,
  fetchPatientAppointments,
  setUserAppointments,
  rejectFetchAppointments,
  responceFetchAppointments,
} from "../slice";


function* getPatientAppointmentsWorker({ payload }: any) {
  const { responce: patientResponce } = yield call(getAllPatientAppointments, payload);

    if (patientResponce) {
      const { data: appointments } = patientResponce;
      yield put(responceFetchAppointments(FetchStatus.SUCCESS));
      yield put(setUserAppointments(appointments.appointments));
  } else {
    yield put(rejectFetchAppointments(FetchStatus.FAILED));
  }
};

function* getDoctorAppointmentsWorker({ payload }: any) {
  const { responce: doctorResponce, error } = yield call(getAllDoctorAppointments, payload);

    if (doctorResponce) {
      const { data: appointments } = doctorResponce;
      yield put(responceFetchAppointments(FetchStatus.SUCCESS));
      yield put(setUserAppointments(appointments.appointments));
  } else {
    console.log(error);
    yield put(rejectFetchAppointments(FetchStatus.FAILED));
  }
}

export function* getAppointmentsWatcher() {
  yield takeLatest(fetchDoctorAppointments, getDoctorAppointmentsWorker);
  yield takeLatest(fetchPatientAppointments, getPatientAppointmentsWorker);
}
