import { createSlice, createAction } from "@reduxjs/toolkit";

export const fetchDoctorAppointments = createAction('doctor/appointments');
export const fetchPatientAppointments = createAction('patient/appointments');

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    isLoading: true,
    appointments: [],
  },
  reducers: {
    setUserAppointments: function ({ appointments }, { payload }) {
      return {
        isLoading: false,
        appointments: [...appointments, ...payload]
      }
    },
  },
});

export const appointmentsReducer = appointmentsSlice.reducer;
export const { setUserAppointments } = appointmentsSlice.actions;
