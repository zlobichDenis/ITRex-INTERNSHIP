import { api } from "services";

export const getAllDoctorAppointments = ([ limit, offset, token ]) => (
  api
    .get("/appointments/doctor/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        offset: offset,
        limit: limit,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }))
);
