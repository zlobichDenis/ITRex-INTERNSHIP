import { PatientData, DoctorData } from "./appointments";

type Resolution = {
  id: string,
  appointment_id: string,
  next_appointment_date: string,
  resolution: string,
  visit_date: string,
}

export type DoctorsResolution = Readonly<Resolution & { patient: PatientData }>;
export type PatientResolution = { doctor: DoctorData };
