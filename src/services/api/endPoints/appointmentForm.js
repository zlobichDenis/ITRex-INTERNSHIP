import { api } from "services";
import { getToken } from "store";

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

export const createAppointment = (data) => {
  const token = getToken();
  return api
    .post("appointments", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error}))
}
