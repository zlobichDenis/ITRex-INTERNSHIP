import { createSlice, createAction } from '@reduxjs/toolkit';

import { DoctorsResolution, PatientResolution } from "types";
import { FetchStatus } from "const";

export type ResolutionSliceState = {
  fetchStatus: string,
  resolutions: Array<DoctorsResolution | PatientResolution> | [],
}

export type FetchResolutionsPayload = {
  offset: number,
  limit: number,
  sortBy?: string,
  order?: string,
}

const initialState: ResolutionSliceState = {
  fetchStatus: '',
  resolutions: [],
}

export const fetchDoctorResolutions = createAction<FetchResolutionsPayload>('resolutions/doctor');
export const fetchPatientResolutions = createAction<FetchResolutionsPayload>('resolutions/patient');
export const responceFetchResolutions = createAction('resolutions/responce');
export const rejectFetchResolutions = createAction('resolutions/reject');

const resolutionsSlice = createSlice({
  name: 'resolutions',
  initialState,
  reducers: {
    setUserResolutions: function(state, { payload }) {
      return { ...state, resolutions: payload };
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchDoctorResolutions, state => {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    })
    builder.addCase(fetchPatientResolutions, state => {
      return { ...state, fetchStatus: FetchStatus.PENDING };
    })
    builder.addCase(responceFetchResolutions, state => {
      return { ...state, fetchStatus: FetchStatus.SUCCESS };
    })
    builder.addCase(rejectFetchResolutions, state => {
      return { ...state, fetchStatus: FetchStatus.FAILED };
    })
  })
});

export const resolutionsReducer = resolutionsSlice.reducer;
export const { setUserResolutions } = resolutionsSlice.actions;