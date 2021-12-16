import { api } from 'services';
import { Specialization, Doctor } from 'types';

export type GetAvailableTimeParams = {
  doctorId: string,
  date: string,
}

export type CreateAppointmentParams = {
  date: string,
  reason: string,
  note: string,
  doctorID: string,
}

const EndPoints = {
  getAllSpecializations: () => `specializations`,
  getDoctorsBySpecialisations: (specializationId: string) => `doctors/specialization/${specializationId}`,
  getAvailableTime: () => 'appointments/time/free',
  postCreatedAppointment: () => 'appointments',
} as const;

export const getAllSpecializations = () =>
  api
    .get<Array<Specialization>>(EndPoints.getAllSpecializations())
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getDoctorsBySpecialisations = (specializationId: string) =>
  api
    .get<Array<Doctor>>(EndPoints.getDoctorsBySpecialisations(specializationId))
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getAvailableTime = ({ doctorId, date }: GetAvailableTimeParams) =>
  api
    .get<Array<string>>(EndPoints.getAvailableTime(), {
      params: {
        doctorId: doctorId,
        date: date,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const postCreatedAppointment = (data: CreateAppointmentParams) =>
  api
    .post(EndPoints.postCreatedAppointment(), data)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
