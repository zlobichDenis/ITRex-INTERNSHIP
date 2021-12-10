import { PatientAppointment, PatientResolution } from 'types';
import { api } from 'services';

import { FetchAppointmentsPayload, FetchResolutionsPayload } from "modules/Cabinet/redux";

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
