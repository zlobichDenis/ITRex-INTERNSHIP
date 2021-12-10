import { api } from 'services';
import { CreateResolutionPayload } from 'modules/Cabinet/redux';
import { DoctorAppointment, DoctorsResolution } from 'types';
import { FetchAppointmentsPayload } from "modules/Cabinet/redux";

type fetchAllDoctorAppointmentsParams = FetchAppointmentsPayload;

type DoctorAppointmentResponceData = {
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

type fetchDoctorResolutionsParams = {
  offset: number,
  limit: number,
}

type DoctorResolutionsResponceData = {
  total: number,
  resolutions: Array<DoctorsResolution> | [],
}

export const fetchAllDoctorAppointments = (pagination: fetchAllDoctorAppointmentsParams) =>
  api
    .get<DoctorAppointmentResponceData>('/appointments/doctor/me', {
      params: pagination,
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

export const postNewResolution = (resolution: PostNewResolutionParams) =>
  api
    .post<PostNewResolutionResponce>('/resolutions', resolution)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));


export const fetchAllDoctorResolutions = (pagination: fetchDoctorResolutionsParams) => (
  api
    .get<DoctorResolutionsResponceData>('resolutions/doctor/me', {
    params: pagination,
  })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }))
)
