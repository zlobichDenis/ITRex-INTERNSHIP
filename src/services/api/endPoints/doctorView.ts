import { api } from 'services';
import { CreateResolutionPayload } from 'modules/Cabinet/redux';
import { DoctorAppointment } from 'types';

type getAllDoctorAppointmentsParams = {
  limit: number;
  offset: number;
};

type PatientResponceData = {
  appoinments: Array<DoctorAppointment>;
  total: number;
};

type PathChangesInAppointmentParams = {
  id: string;
  status: string;
  date: string;
};

type PostNewResolutionParams = CreateResolutionPayload;
type PostNewResolutionResponce = {
  id: string;
  appointment_id: string;
  next_appointment_dat: string;
  resolution: string;
};

export const fetchAllDoctorAppointments = ({
  limit,
  offset,
}: getAllDoctorAppointmentsParams) =>
  api
    .get<PatientResponceData>('/appointments/doctor/me', {
      params: {
        offset: offset,
        limit: limit,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const postDeletedAppointment = (appointmentId: string) =>
  api
    .delete<string>(`/appointments/${appointmentId}`)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const pathChangesInAppointment = ({
  id,
  ...body
}: PathChangesInAppointmentParams) =>
  api
    .patch<string>(`/appointments/${id}`, body)
    .then((responce) => ({ responce }))
    .then((error) => ({ error }));

export const postNewResolution = (resolution: PostNewResolutionParams) => {
  console.log(resolution)
  return api
    .post<PostNewResolutionResponce>('/resolutions', resolution)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
}
