import { createAction } from "@reduxjs/toolkit";
import { GetAvailableTimeParams } from "services";

export const fetchSpecializations = createAction('form/specializations');
export const fetchDoctorPerSpecialization = createAction<string>('form/doctorPerSpecializations');
export const fetchAvailableTimes = createAction<GetAvailableTimeParams>('form/availableTime');