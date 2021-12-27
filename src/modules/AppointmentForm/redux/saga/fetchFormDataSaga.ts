import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import {
  fetchAvailableTimes,
  fetchSpecializations,
  fetchDoctorPerSpecialization,
  setAvailableTimes,
  setDoctorPerSpecialization,
  setSpecializations,
} from '..';
import {
  fetchAllSpecializations,
  fetchAvailableTime,
  getDoctorsBySpecialisations,
} from 'services';
import { FetchAvailableTimeParams } from 'types';


function* fetchSpecializationWorker() {
  const { response, error } = yield call(fetchAllSpecializations);

  if (response) {
    const { data } = response;
    yield put(setSpecializations(data));
  } else {
    yield put(setSpecializations(error));
  }
}

function* fetchDoctorsBySpecialisationsWorker({ payload }: PayloadAction<string>) {
  const { response, error } = yield call(getDoctorsBySpecialisations, payload);

  if (response) {
    const { data } = response;
    yield put(setDoctorPerSpecialization(data));
  } else {
    yield put(setDoctorPerSpecialization(error));
  }
}

function* fetchAvailableTimeWorker({ payload }: PayloadAction<FetchAvailableTimeParams>) {
  const { response, error } = yield call(fetchAvailableTime, payload);
  if (response) {
    const { data } = response;
    yield put(setAvailableTimes(data));
  } else {
    yield put(setAvailableTimes(error));
  }
}


export function* getFormDataWatcher() {
  yield takeLatest(fetchSpecializations, fetchSpecializationWorker);
  yield takeLatest(fetchDoctorPerSpecialization, fetchDoctorsBySpecialisationsWorker);
  yield takeLatest(fetchAvailableTimes, fetchAvailableTimeWorker);
}
