import { createSlice } from '@reduxjs/toolkit';

import { FetchStatus } from 'const';
import { Specialization, Doctor } from 'types';

type initialStateValues = {
  fetchStatus: string,
  specializations: Array<Specialization> | null,
  doctors: Array<Doctor> | null,
  date: Array<string> | null,
  availableTimes: Array<string> | null,
}

const initialState = {
  fetchStatus: '',
  specializations: null,
  doctors: null,
  date: null,
  availableTimes: null,
} as initialStateValues

export const createAppointmentSlice = createSlice({
  name: 'create-appointment',
  initialState,
  reducers: {
    postNewAppointment: function (state, { payload }) {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    },
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
});

export const createAppointmentReducer = createAppointmentSlice.reducer;
export const {
  postNewAppointment,
  responcePostAppointment,
  rejectPostAppointment,
  setAvailableTimes,
  setDoctorPerSpecialization,
  setSpecializations,
  setDefaultFetchStatus,
} = createAppointmentSlice.actions;
