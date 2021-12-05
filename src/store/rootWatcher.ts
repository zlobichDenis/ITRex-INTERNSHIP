import { all } from "@redux-saga/core/effects";
import { getUserDataWatcher } from "modules/AuthentificationForm/redux";
import { getAppointmentsWatcher, postAppointmentChangesWatcher } from "modules/Cabinet/redux";
import {
  createAppointmentWatcher,
  getFormaDataWatcher,
} from "modules/AppointmentForm/redux";

export function* rootWatcher() {
  yield all([
    getUserDataWatcher(),
    getAppointmentsWatcher(),
    createAppointmentWatcher(),
    getFormaDataWatcher(),
    postAppointmentChangesWatcher(),
  ]);
}
