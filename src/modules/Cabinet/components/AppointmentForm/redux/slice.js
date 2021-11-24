import { createSlice } from "@reduxjs/toolkit";

import { FetchStatus } from "const";

export const createAppointmentSlice = createSlice({
  name: "create-appointment",
  initialState: {
    fetchStatus: null,
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
  },
});

export const createAppointmentReducer = createAppointmentSlice.reducer;
export const {
  postNewAppointment,
  responcePostAppointment,
  rejectPostAppointment,
} = createAppointmentSlice.actions;
