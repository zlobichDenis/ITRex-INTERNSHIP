import { all } from "@redux-saga/core/effects";
import { getUserDataWatcher } from "modules/AuthentificationForm/redux";
import { getAllDoctorAppointmentsWatcher } from "modules/Cabinet/redux";

export function* rootWatcher() {
    yield all([ getUserDataWatcher(), getAllDoctorAppointmentsWatcher()]);
}