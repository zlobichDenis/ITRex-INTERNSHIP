import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store";
import { AppointmentFormDataState } from "./slice";

const appointmentFormDataState = (state: RootState): AppointmentFormDataState => state.appointmentFormData;

export const getAppointmentFormDataFetchStatus = createSelector(appointmentFormDataState, state => state.fetchStatus);
export const getSpecializations = createSelector(appointmentFormDataState, state => state.specializations);
export const getDoctorsPerSpecialization = createSelector(appointmentFormDataState, state => state.doctors);
export const getAvailableHoursForVisit = createSelector(appointmentFormDataState, state => state.availableTimes);
export const getDate = createSelector(appointmentFormDataState, state => state.date);


