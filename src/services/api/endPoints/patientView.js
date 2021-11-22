import { api } from "services";

export const getAllPatientAppointments = ([ limit, offset, token ]) =>
  api
    .get("/appointments/patient/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        offset: offset,
        limit: limit,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }));
