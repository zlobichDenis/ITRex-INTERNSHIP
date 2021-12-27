import { put, call, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { fetchAllDoctorResolutions, fetchAllPatientResolutions } from "services";
import { errorNotify } from "notification";
import { ErrorMessages} from "dictionary";
import { FetchDataList } from "types";
import {
  setUserResolutions,
  fetchDoctorResolutions,
  fetchPatientResolutions,
  responseFetchResolutions,
  rejectFetchResolutions } from "../resolutionsSlice";

function* fetchDoctorResolutionsWorker({ payload }: PayloadAction<FetchDataList>) {
  const { response: doctorResponse } = yield call(fetchAllDoctorResolutions, payload);

  if (doctorResponse) {
    const { data: resolutions } = doctorResponse;
    yield put(setUserResolutions(resolutions.resolutions));
    yield put(responseFetchResolutions());
  } else {
    errorNotify(ErrorMessages.FETCH_DATA);
    yield put(rejectFetchResolutions());
  }
}

function* fetchPatientResolutionsWorker({ payload }: PayloadAction<FetchDataList>) {
  const { response: patientResponse } = yield call(fetchAllPatientResolutions, payload);

  if (patientResponse) {
    const { data: resolutions } = patientResponse;
    yield put(setUserResolutions(resolutions.resolutions));
    yield put(responseFetchResolutions());
  } else {
    errorNotify(ErrorMessages.FETCH_DATA);
    yield put(rejectFetchResolutions());
  }
}

export function* fetchResolutionsWatcher() {
  yield takeLatest(fetchDoctorResolutions, fetchDoctorResolutionsWorker);
  yield takeLatest(fetchPatientResolutions, fetchPatientResolutionsWorker)
}