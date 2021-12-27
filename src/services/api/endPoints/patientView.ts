import { PatientAppointment, PatientResolution, FetchDataList } from 'types';
import { api } from 'services';


type PatientAppointmentsResponseData = {
  appointments: Array<PatientAppointment> | [],
  total: number,
}

type PatientResolutionResponseData = {
  resolutions: Array<PatientResolution> | [],
  total: number,
}

const EndPoints = {
  fetchAllPatientAppointments: () => `/appointments/patient/me`,
  fetchAllPatientResolutions: () => `/resolutions/patient/me`,
} as const;

export const fetchAllPatientAppointments = (pagination: FetchDataList) => (
  api
    .get<PatientAppointmentsResponseData>(EndPoints.fetchAllPatientAppointments(), {
      params: pagination,
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }))
);

export const fetchAllPatientResolutions = (pagination: FetchDataList) => (
  api
    .get<PatientResolutionResponseData>(EndPoints.fetchAllPatientResolutions(), {
      params: pagination,
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }))
)
