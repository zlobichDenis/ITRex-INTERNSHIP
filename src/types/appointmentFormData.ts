type AppointmentFormRequestParams = {
  doctorID: string,
  date: string,
}

export type FetchAvailableTimeParams = AppointmentFormRequestParams;
export type PostNewAppointmentParams = AppointmentFormRequestParams & { note: string, reason: string };
export type CreateNewAppointmentParams = {
  occupation: string,
  date: string,
  doctorName: string,
  time: string,
  note: string,
  reason: string,
}