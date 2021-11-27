import { api } from "services";

export const getAllPatientAppointments = ({ limit, offset }) => (
  api
    .get("/appointments/patient/me", {
      params: {
        offset: offset,
        limit: limit,
      },
    })
    .then((responce) => ({ responce }))
    .catch((error) => ({ error }))
);
