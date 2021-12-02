import { api } from "services";
import { DoctorAppointment } from 'types';

type getAllDoctorAppointmentsParams = {
  limit: number,
  offset: number,
}

type ResponceData = {
  appoinments: Array<DoctorAppointment>,
  total: number,
}



export const getAllDoctorAppointments = ({ limit, offset }: getAllDoctorAppointmentsParams) => (
  api
    .get<ResponceData>("/appointments/doctor/me", {
      params: {
        offset: offset,
        limit: limit,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }))
);
