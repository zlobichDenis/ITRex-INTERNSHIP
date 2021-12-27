import { createSlice, createAction } from '@reduxjs/toolkit';

import { DoctorAppointment, PatientAppointment, PostNewResolution, FetchDataList } from 'types';
import { FetchStatus } from 'enums';


export type AppointmentSliceState = {
  fetchStatus: FetchStatus,
  appointments: Array<DoctorAppointment | PatientAppointment> | [],
}

const initialState: AppointmentSliceState = {
  fetchStatus: FetchStatus.DEFAULT,
  appointments: [],
};

export const deleteAppointment = createAction<string>('appointments/delete');
export const postNewResolution = createAction<PostNewResolution>('appointments/resolution');
export const responseFetchAppointments = createAction('appointments/response');
export const rejectFetchAppointments = createAction('appointments/reject');
export const fetchPatientAppointments = createAction<FetchDataList>('appointments/patient');
export const fetchDoctorAppointments = createAction<FetchDataList>('appointment/doctor');

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setUserAppointments: function (state, { payload }){
      return { ...state, appointments: payload };
    },
  },
  extraReducers: (builder => {
    builder.addCase(responseFetchAppointments, (state) => {
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
