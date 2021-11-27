import { api } from "services";

export const getAllDoctorAppointments = ({ limit, offset }) => (
  api
    .get("/appointments/doctor/me", {
      params: {
        offset: offset,
        limit: limit,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }))
);
