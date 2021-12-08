import { api } from "services";
import { Specialization, Doctor } from "types";

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

export const getAllSpecializations = () =>
  api
    .get<Array<Specialization>>("specializations")
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getDoctorsBySpecialisations = (specializationId: string) =>
  api
    .get<Array<Doctor>>(`doctors/specialization/${specializationId}`)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getAvailableTime = ({ doctorId, date }: GetAvailableTimeParams) =>
  api
    .get<Array<string>>("appointments/time/free", {
      params: {
        doctorId: doctorId,
        date: date,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const createAppointment = (data: CreateAppointmentParams) =>
  api
    .post("appointments", data)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
