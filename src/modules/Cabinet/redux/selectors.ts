import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store";
import { AppointmentSliceState } from "./appointmentsSlice";
import { ResolutionSliceState } from "./resolutionsSlice";


const appointmentsState = (state: RootState): AppointmentSliceState => state.appointments;
const resolutionsState = (state: RootState): ResolutionSliceState => state.resolutions;

export const getAppointmentsFetchStatus = createSelector(appointmentsState, state => state.fetchStatus);
export const getUserAppointments = createSelector(appointmentsState, state => state.appointments);

export const getUserResolutions = createSelector(resolutionsState, state => state.resolutions);
export const getResolutionsFetchStatus = createSelector(resolutionsState, state => state.fetchStatus);


