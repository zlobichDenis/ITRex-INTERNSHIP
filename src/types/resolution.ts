import { PatientData, DoctorData } from "./appointment";

export type DoctorsResolution = {
  id: string,
  appointment_id: string,
  next_appointment_date: string,
  resolution: string,
  visit_date: string,
  patient: PatientData,
}

export type PatientResolution = {
  id: string,
  appointment_id: string,
  next_appointment_date: string,
  resolution: string,
  visit_date: string,
  doctor: DoctorData,
}
