import { createAction, createSlice } from '@reduxjs/toolkit';

import { FetchStatus } from 'const';
import { CreateAppointmentParams, GetAvailableTimeParams } from "services";
import { Doctor, Specialization } from 'types';

export type AppointmentFormDataState = {
  fetchStatus: string,
  specializations: Array<Specialization> | null,
  doctors: Array<Doctor> | null,
  date: Array<string> | null,
  availableTimes: Array<string> | null,
}
type PostNewAppointmentPayload = CreateAppointmentParams;

const initialState = {
  fetchStatus: '',
  specializations: null,
  doctors: null,
  date: null,
  availableTimes: null,
} as AppointmentFormDataState;

export const postNewAppointment = createAction<PostNewAppointmentPayload>('appointments/create')
export const fetchSpecializations = createAction('form/specializations');
export const fetchDoctorPerSpecialization = createAction<string>('form/doctorPerSpecializations');
export const fetchAvailableTimes = createAction<GetAvailableTimeParams>('form/availableTime');

export const appointmentFormDataSlice = createSlice({
  name: 'AppointmentFormData',
  initialState,
  reducers: {
    responcePostAppointment: function (state) {
      return { ...state, fetchStatus: FetchStatus.SUCCESS };
    },
    rejectPostAppointment: function (state) {
      return { ...state, fetchStatus: FetchStatus.FAILED };
    },
    setDefaultFetchStatus: function (state) {
      return { ...state, fetchStatus: ''}
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

  extraReducers: (builder => {
    builder.addCase(postNewAppointment, (state) => {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    })
  })
});

export const createAppointmentReducer = appointmentFormDataSlice.reducer;
export const {
  responcePostAppointment,
  rejectPostAppointment,
  setAvailableTimes,
  setDoctorPerSpecialization,
  setSpecializations,
  setDefaultFetchStatus,
} = appointmentFormDataSlice.actions;
