import { all } from "@redux-saga/core/effects";
import { getUserDataWatcher } from "modules/AuthentificationForm/redux";
import { getAppointmentsWatcher } from "modules/Cabinet/redux";
import { createAppointmentWatcher } from "modules/Cabinet/components/AppointmentForm/redux";

export function* rootWatcher() {
    yield all([ getUserDataWatcher(), getAppointmentsWatcher(), createAppointmentWatcher()]);
}