import { all } from '@redux-saga/core/effects';
import { getUserDataWatcher } from 'modules/AuthentificationForm/redux';
import { fetchAppointmentsWatcher, postAppointmentChangesWatcher } from 'modules/AppointmentsList/redux';
import { fetchResolutionsWatcher } from "modules/ResolutionsList/redux";
import {
  createAppointmentWatcher,
  getFormDataWatcher,
} from 'modules/AppointmentForm/redux';

export function* rootWatcher() {
  yield all([
    getUserDataWatcher(),
    fetchAppointmentsWatcher(),
    createAppointmentWatcher(),
    fetchResolutionsWatcher(),
    getFormDataWatcher(),
    postAppointmentChangesWatcher(),
  ]);
}
