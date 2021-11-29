import { api } from "services";

export const getAllSpecializations = () =>
  api
    .get("specializations")
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getDoctorsBySpezialisations = (specializationId) =>
  api
    .get(`doctors/specialization/${specializationId}`)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const getAvailableTime = ({ doctorId, date }) =>
  api
    .get("appointments/time/free", {
      params: {
        doctorId: doctorId,
        date: date,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));

export const createAppointment = (data) =>
  api
    .post("appointments", data)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
