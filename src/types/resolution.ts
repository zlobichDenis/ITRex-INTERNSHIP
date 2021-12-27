import { PatientData, DoctorData } from "./appointment";

type Resolution = {
  readonly id: string,
  readonly appointment_id: string,
  readonly next_appointment_date: string,
  readonly resolution: string,
  readonly visit_date: string,
}

export type DoctorsResolution = Resolution & { patient: PatientData };
export type PatientResolution = { doctor: DoctorData };
