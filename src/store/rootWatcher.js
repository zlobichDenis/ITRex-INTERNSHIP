import { all } from "@redux-saga/core/effects";
import { getUserDataWatcher } from "modules/AuthentificationForm/redux";
import { getAppointmentsWatcher } from "modules/Cabinet/components/AppointmentsList/redux";
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
  ]);
}
