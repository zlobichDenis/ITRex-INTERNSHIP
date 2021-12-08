import { createSlice, createAction } from '@reduxjs/toolkit';

import { DoctorAppointment, PatientAppointment } from 'types';
import { FetchStatus } from 'const';


type AppointmentSliceState = {
  fetchStatus: string,
  appointments: Array<DoctorAppointment | PatientAppointment> | [],
}

export type CreateResolutionPayload = {
  resolution: string,
  appointmentID: string,
}

const initialState: AppointmentSliceState = {
  fetchStatus: '',
  appointments: [],
}

export const deleteAppointment = createAction<string>('appointments/delete');
export const createResolution = createAction<CreateResolutionPayload>('appointment/resolution');

export const appointmentsSlice = createSlice({
  name: 'appointments',
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
    responceFetchAppointments: function (state, _) {
      return { ...state, fetchStatus: FetchStatus.SUCCESS };
    },
    rejectFetchAppointments: function (state, _) {
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
