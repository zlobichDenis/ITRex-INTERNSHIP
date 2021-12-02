import { put, takeLatest, call } from "redux-saga/effects";

import {
  fetchAvailableTimes,
  fetchSpecializations,
  fetchDoctorPerSpecialization,
  setAvailableTimes,
  setDoctorPerSpecialization,
  setSpecializations,
} from "..";
import {
  getAllSpecializations,
  getAvailableTime,
  getDoctorsBySpezialisations,
} from "services";


function* getSpecializationWorker() {
  const { responce, error } = yield call(getAllSpecializations);

  if (responce) {
    const { data } = responce;
    yield put(setSpecializations(data));
  } else {
    yield put(setSpecializations(error));
  }
}

function* getDoctorsBySpezialisationsWorker({ payload }: any) {
  const { responce, error } = yield call(getDoctorsBySpezialisations, payload);

  if (responce) {
      const { data } = responce;
      yield put(setDoctorPerSpecialization(data));
  } else {
    yield put(setDoctorPerSpecialization(error));
  }
}

function* getAvailableTimeWorker({ payload }: any) {
  const { responce, error } = yield call(getAvailableTime, payload);

  if (responce) {
    const { data } = responce;
    yield put(setAvailableTimes(data));
  } else {
    yield put(setAvailableTimes(error));
  }
}


export function* getFormaDataWatcher() {
  yield takeLatest(fetchSpecializations, getSpecializationWorker);
  yield takeLatest(
    fetchDoctorPerSpecialization,
    getDoctorsBySpezialisationsWorker
  );
  yield takeLatest(fetchAvailableTimes, getAvailableTimeWorker);
}
