import { api } from 'services';
import { DoctorAppointment, DoctorsResolution, PostNewResolution, FetchDataList } from 'types';


type DoctorAppointmentResponseData = {
  appointments: Array<DoctorAppointment>;
  total: number;
};

type PostNewResolutionResponseData = {
  id: string;
  appointment_id: string;
  next_appointment_dat: string;
  resolution: string;
};

type DoctorResolutionsResponseData = {
  total: number,
  resolutions: Array<DoctorsResolution> | [],
}

const EndPoints = {
  fetchAllDoctorAppointments: () => `/appointments/doctor/me`,
  postDeletedAppointment: (appointmentId: string) => `/appointments/${appointmentId}`,
  pathChangesInAppointment: (id: string) => `/appointments/${id}`,
  fetchAllDoctorResolutions: () => `resolutions/doctor/me`,
} as const;

export const fetchAllDoctorAppointments = (pagination: FetchDataList) =>
  api
    .get<DoctorAppointmentResponseData>(EndPoints.fetchAllDoctorAppointments(), {
      params: pagination,
    })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const postDeletedAppointment = (appointmentId: string) =>
  api
    .delete<string>(EndPoints.postDeletedAppointment(appointmentId))
    .then((response) => ({ response }))
    .catch((error) => ({ error }));

export const postNewResolution = (resolution: PostNewResolution) =>
  api
    .post<PostNewResolutionResponseData>('/resolutions', resolution)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));


export const fetchAllDoctorResolutions = (pagination: FetchDataList) => (
  api
    .get<DoctorResolutionsResponseData>(EndPoints.fetchAllDoctorResolutions(), {
    params: pagination,
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }))
)
