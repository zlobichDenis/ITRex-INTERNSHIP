import { createSlice, createAction } from "@reduxjs/toolkit";
import { FetchStatus } from "const";


export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    fetchStatus: null,
    appointments: [],
  },
  reducers: {
    setUserAppointments: function (state, { payload }) {
      return { ...state, appointments: payload };
    },
    fetchDoctorAppointments: function (state) {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    },
    fetchPatientAppointments: function (state) {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    },
    responceFetchAppointments: function (state) {
      return { ...state, fetchStatus: FetchStatus.SUCCESS };
    },
    rejectFetchAppointments: function (state) {
      return { ...state, fetchStatus: FetchStatus.FAILED };
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
