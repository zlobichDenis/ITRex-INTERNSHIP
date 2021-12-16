import { api } from 'services';
import { DoctorAppointment, DoctorsResolution } from 'types';
import { FetchAppointmentsPayload, CreateResolutionPayload } from "modules/AppointmentsList/redux";

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

const EndPoints = {
  fetchAllDoctorAppointments: () => `/appointments/doctor/me`,
  postDeletedAppointment: (appointmentId: string) => `/appointments/${appointmentId}`,
  pathChangesInAppointment: (id: string) => `/appointments/${id}`,
  fetchAllDoctorResolutions: () => `resolutions/doctor/me`,
} as const;

export const fetchAllDoctorAppointments = (pagination: fetchAllDoctorAppointmentsParams) =>
  api
    .get<DoctorAppointmentResponceData>(EndPoints.fetchAllDoctorAppointments(), {
      params: pagination,
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const postDeletedAppointment = (appointmentId: string) =>
  api
    .delete<string>(EndPoints.postDeletedAppointment(appointmentId))
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const pathChangesInAppointment = ({
                                           id,
                                           ...body
                                         }: PathChangesInAppointmentParams) =>
  api
    .patch<string>(EndPoints.pathChangesInAppointment(id), body)
    .then((responce) => ({ responce }))
    .then((error) => ({ error }));

export const postNewResolution = (resolution: PostNewResolutionParams) =>
  api
    .post<PostNewResolutionResponce>('/resolutions', resolution)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));


export const fetchAllDoctorResolutions = (pagination: fetchDoctorResolutionsParams) => (
  api
    .get<DoctorResolutionsResponceData>(EndPoints.fetchAllDoctorResolutions(), {
    params: pagination,
  })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }))
)
