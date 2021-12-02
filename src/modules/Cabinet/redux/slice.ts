import { createSlice } from "@reduxjs/toolkit";

import { DoctorAppointment, PatientAppointment } from "types";


type AppointmentSliceState = {
  fetchStatus: string,
  appointments: Array<DoctorAppointment | PatientAppointment> | [],
}

const initialState: AppointmentSliceState = {
  fetchStatus: '',
  appointments: [],
}

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    setUserAppointments: function (state: AppointmentSliceState, { payload }) {
      return { ...state, appointments: payload };
    },
    fetchDoctorAppointments: function (state, { payload }) {
      return { ...state, fetchStatus: payload };
    },
    fetchPatientAppointments: function (state, { payload }) {
      return { ...state, fetchStatus: payload };
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
