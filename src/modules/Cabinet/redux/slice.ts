import { createSlice, createAction } from '@reduxjs/toolkit';

import { DoctorAppointment, PatientAppointment } from 'types';
import { FetchStatus } from 'const';


export type AppointmentSliceState = {
  fetchStatus: string,
  appointments: Array<DoctorAppointment | PatientAppointment> | [],
}

export type CreateResolutionPayload = {
  resolution: string,
  appointmentID: string,
}

export type FetchAppointmentsPayload = {
  offset: number,
  limit: number,
  sortBy?: string,
  order?: string,
}

const initialState: AppointmentSliceState = {
  fetchStatus: '',
  appointments: [],
}

export const deleteAppointment = createAction<string>('appointments/delete');
export const createResolution = createAction<CreateResolutionPayload>('appointment/resolution');
export const responceFetchAppointments = createAction('appointments/responce');
export const rejectFetchAppointments = createAction('appointments/reject');
export const fetchPatientAppointments = createAction<FetchAppointmentsPayload>('appointments/patient');
export const fetchDoctorAppointments = createAction<FetchAppointmentsPayload>('appointment/doctor');

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setUserAppointments: function (state, { payload }){
      return { ...state, appointments: payload };
    },
    responceFetchAppointments: function(state) {
      return { ...state, fetchStatus: FetchStatus.SUCCESS };
    }
  },

  extraReducers: (builder => {
    builder.addCase(responceFetchAppointments, (state) => {
      return { ...state, fetchStatus: FetchStatus.SUCCESS };
    })
    builder.addCase(rejectFetchAppointments, (state) => {
      return { ...state, fetchStatus: FetchStatus.FAILED };
    })
    builder.addCase(fetchPatientAppointments, (state) => {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    })
    builder.addCase(fetchDoctorAppointments, (state) => {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    })
  })
});

export const appointmentsReducer = appointmentsSlice.reducer;
export const { setUserAppointments } = appointmentsSlice.actions;
