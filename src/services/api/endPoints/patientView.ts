import { PatientAppointment, PatientResolution } from 'types';
import { api } from 'services';

import { FetchResolutionsPayload } from "modules/ResolutionsList/redux";
import { FetchAppointmentsPayload } from "modules/AppointmentsList/redux";

type fetchAllPatientAppointmentsParams = FetchAppointmentsPayload;
type fetchAllPatientResolutionsParams = FetchResolutionsPayload;

type PatientAppointmentsResponceData = {
  appoinments: Array<PatientAppointment>,
  total: number,
}

type PatientResolutionResponceData = {
  resolutions: Array<PatientResolution> | [],
  total: number,
}


export const fetchAllPatientAppointments = (pagination: fetchAllPatientAppointmentsParams) => (
  api
    .get<PatientAppointmentsResponceData>('/appointments/patient/me', {
      params: pagination,
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }))
);

export const fetchAllPatientResolutions = (pagination: fetchAllPatientResolutionsParams) => (
  api
    .get<PatientResolutionResponceData>('/resolutions/patient/me', {
      params: pagination,
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }))
)
