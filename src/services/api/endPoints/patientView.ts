import { PatientAppointment } from 'types';
import { api } from 'services';

type getAllPatientAppointmentsParams = {
  limit: number,
  offset: number,
}

type ResponceData = {
  appoinments: Array<PatientAppointment>,
  total: number,
}

export const fetchAllPatientAppointments = ({ limit, offset }: getAllPatientAppointmentsParams) => (
  api
    .get<ResponceData>('/appointments/patient/me', {
      params: {
        offset: offset,
        limit: limit,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }))
);
