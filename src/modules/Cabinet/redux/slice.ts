import { createSlice, createAction } from "@reduxjs/toolkit";

import { EditAppointmentWorkerParams } from ".";
import { DoctorAppointment, PatientAppointment } from "types";
import { FetchStatus } from 'const';


type AppointmentSliceState = {
  fetchStatus: string,
  appointments: Array<DoctorAppointment | PatientAppointment> | [],
}

const initialState: AppointmentSliceState = {
  fetchStatus: '',
  appointments: [],
}

export const deleteAppointment = createAction<string>('appointments/delete');
// export const editAppointment = createAction<EditAppointmentWorkerParams>('appointments/edit');

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setUserAppointments: function (state, { payload }) {
      return { ...state, appointments: payload };
    },
    fetchDoctorAppointments: function (state, _) {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    },
    fetchPatientAppointments: function (state, _) {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    },
    responceFetchAppointments: function (state, { payload }) {
      return { ...state, fetchStatus: payload };
    },
    rejectFetchAppointments: function (state, { payload }) {
      return { ...state, fetchStatus: payload };
    },

  },
});

export const appointmentsReducer = appointmentsSlice.reducer;
export const {
  setUserAppointments,
  fetchDoctorAppointments,
  fetchPatientAppointments,
  responceFetchAppointments,
  rejectFetchAppointments,
} = appointmentsSlice.actions;
