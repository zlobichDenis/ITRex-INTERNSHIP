import { put, takeLatest, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { postDeletedAppointment, errorNotify, responceNotify  } from "services";
import { SuccesMessages, ErrorMessages, appointmnetsPagination } from "const";
import { deleteAppointment, fetchDoctorAppointments } from "..";

export type EditAppointmentWorkerParams = {
  status: string,
  date: string,
};

function* deleteAppointmentWorker({ payload }: PayloadAction<string>) {
  const { responce: deleteResponce, error: deleteError } = yield call(postDeletedAppointment, payload);
  console.log(deleteResponce, deleteError)
  if (deleteResponce) {
    responceNotify(SuccesMessages.DELETE_APPOINTMENTS);
    yield put(fetchDoctorAppointments(appointmnetsPagination));
  } else {
    errorNotify(ErrorMessages.DELETE_APPOINTMENTS);
  }
};

// function* editAppointmentWorker({ payload }: PayloadAction<EditAppointmentWorkerParams>) {
//   const { responce, error } = yield call()
// }

export function* postAppointmentChangesWatcher() {
  yield takeLatest(deleteAppointment, deleteAppointmentWorker);
  // yield takeLatest(editAppointment)
}