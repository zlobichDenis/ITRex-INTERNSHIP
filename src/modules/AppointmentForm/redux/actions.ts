import { createAction, PayloadAction } from "@reduxjs/toolkit";

export const fetchSpecializations = createAction<PayloadAction>('form/specializations');
export const fetchDoctorPerSpecialization = createAction<PayloadAction>('form/doctorPerSpecializations');
export const fetchAvailableTimes = createAction<PayloadAction>('form/availableTime');