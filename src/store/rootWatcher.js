import { all } from "@redux-saga/core/effects";
import { getUserDataWatcher } from "modules/AuthentificationForm/redux";
import { getAppointmentsWatcher } from "modules/Cabinet/redux";

export function* rootWatcher() {
    yield all([ getUserDataWatcher(), getAppointmentsWatcher()]);
}