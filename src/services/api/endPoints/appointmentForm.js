import { api } from "services";

export const getAllSpecializations = () => api.get("specializations");

export const getDoctorsBySpezialisations = (specializationId) =>
  api.get(`doctors/specialization/${specializationId}`);

export const getAvailableTime = (doctorId, date) =>
  api.get("appointments/time/free", {
    params: {
      doctorId: doctorId,
      date: date,
    },
  });

export const createAppointment = (data) => (
  api
    .post("appointments", data)
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }))
);
