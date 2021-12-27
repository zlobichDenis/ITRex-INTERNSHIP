import { createSlice, createAction } from '@reduxjs/toolkit';

import { DoctorsResolution, PatientResolution, FetchDataList } from "types";
import { FetchStatus } from "enums";

export type ResolutionSliceState = {
  fetchStatus: FetchStatus,
  resolutions: Array<DoctorsResolution | PatientResolution> | [],
}

const initialState: ResolutionSliceState = {
  fetchStatus: FetchStatus.DEFAULT,
  resolutions: [],
}

export const fetchDoctorResolutions = createAction<FetchDataList>('resolutions/doctor');
export const fetchPatientResolutions = createAction<FetchDataList>('resolutions/patient');
export const responseFetchResolutions = createAction('resolutions/response');
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
    builder.addCase(responseFetchResolutions, state => {
      return { ...state, fetchStatus: FetchStatus.SUCCESS };
    })
    builder.addCase(rejectFetchResolutions, state => {
      return { ...state, fetchStatus: FetchStatus.FAILED };
    })
  })
});

export const resolutionsReducer = resolutionsSlice.reducer;
export const { setUserResolutions } = resolutionsSlice.actions;