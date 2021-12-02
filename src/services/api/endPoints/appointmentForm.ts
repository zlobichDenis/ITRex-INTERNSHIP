import { api } from "services";
import { Specialization, Doctor } from "types";

type getAvailableTimeProps = {
  doctorId: string,
  date: string,
}


export const getAllSpecializations = () =>
  api
    .get<Array<Specialization>>("specializations")
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getDoctorsBySpezialisations = (specializationId: string) =>
  api
    .get<Array<Doctor>>(`doctors/specialization/${specializationId}`)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getAvailableTime = ({ doctorId, date }: getAvailableTimeProps) =>
  api
    .get<Array<string>>("appointments/time/free", {
      params: {
        doctorId: doctorId,
        date: date,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const createAppointment = (data: any) =>
  api
    .post("appointments", data)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
