import { put, call, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { fetchAllDoctorResolutions, fetchAllPatientResolutions } from "services";
import { errorNotify } from "notification";
import { ErrorMessages} from "dictionary";
import {
  setUserResolutions,
  fetchDoctorResolutions,
  fetchPatientResolutions,
  responceFetchResolutions,
  rejectFetchResolutions,
  FetchResolutionsPayload } from "../resolutionsSlice";

function* fetchDoctorResolutionsWorker({ payload }: PayloadAction<FetchResolutionsPayload>) {
  const { responce: doctorResponce } = yield call(fetchAllDoctorResolutions, payload);

  if (doctorResponce) {
    const { data: resolutions } = doctorResponce;
    yield put(setUserResolutions(resolutions.resolutions));
    yield put(responceFetchResolutions());
  } else {
    errorNotify(ErrorMessages.FETCH_DATA);
    yield put(rejectFetchResolutions());
  }
}

function* fetchPatientResolutionsWorker({ payload }: PayloadAction<FetchResolutionsPayload>) {
  const { responce: patientResponce } = yield call(fetchAllPatientResolutions, payload);

  if (patientResponce) {
    const { data: resolutions } = patientResponce;
    yield put(setUserResolutions(resolutions.resolutions));
    yield put(responceFetchResolutions());
  } else {
    errorNotify(ErrorMessages.FETCH_DATA);
    yield put(rejectFetchResolutions());
  }
}

export function* fetchResolutionsWatcher() {
  yield takeLatest(fetchDoctorResolutions, fetchDoctorResolutionsWorker);
  yield takeLatest(fetchPatientResolutions, fetchPatientResolutionsWorker)
}