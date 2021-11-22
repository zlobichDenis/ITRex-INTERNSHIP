import { put, takeEvery, call } from 'redux-saga/effects';
// import { useDispatch } from 'react-redux';

import { createAppointment } from 'services';
import * as tokenRepository from "store/tokenRepository";
import { postNewAppointment } from '..';
import { fetchPatientAppointments } from 'modules/Cabinet/redux';
import { setError } from 'store';

export function* createAppointmentWorker({ payload }) {
    const { responce, error } = yield call(createAppointment, payload);
    if (error) {
        yield put(setError(error.message));
    }
};

export function* createAppointmentWatcher() {
    yield takeEvery(postNewAppointment, createAppointmentWorker);
};