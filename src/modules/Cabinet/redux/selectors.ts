import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store";
import { AppointmentSliceState } from "./slice";


const appointmentsState = (state: RootState): AppointmentSliceState => state.appointments;

export const getAppointmentsFetchStatus = createSelector(appointmentsState, state => state.fetchStatus);
export const getUserAppointments = createSelector(appointmentsState, state => state.appointments);


