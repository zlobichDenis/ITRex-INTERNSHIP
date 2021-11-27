import { createAction } from "@reduxjs/toolkit";

export const fetchSpecializations = createAction('form/specializations');
export const fetchDoctorPerSpecialization = createAction('form/doctorPerSpecializations');
export const fetchAvailableTimes = createAction('form/availableTime');