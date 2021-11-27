import { createSlice } from "@reduxjs/toolkit";

import { FetchStatus } from "const";

export const createAppointmentSlice = createSlice({
  name: "create-appointment",
  initialState: {
    fetchStatus: null,
    specializations: null,
    doctors: null,
    date: null,
    availableTimes: null,
  },
  reducers: {
    postNewAppointment: function (state) {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    },
    responcePostAppointment: function (state) {
      return { ...state, fetchStatus: FetchStatus.SUCCESS };
    },
    rejectPostAppointment: function (state) {
      return { ...state, fetchStatus: FetchStatus.FAILED };
    },

    setSpecializations: function(state, { payload }) {
      return { ...state, specializations: payload };
    },
    setDoctorPerSpecialization: function(state, { payload }) {
      return { ...state, doctors: payload };
    },
    setAvailableTimes: function(state, { payload }) {
      return { ...state, availableTimes: payload };
    },
  },
});

export const createAppointmentReducer = createAppointmentSlice.reducer;
export const {
  postNewAppointment,
  responcePostAppointment,
  rejectPostAppointment,
  setAvailableTimes,
  setDoctorPerSpecialization,
  setSpecializations
} = createAppointmentSlice.actions;
