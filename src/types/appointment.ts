export type PatientData = {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
}

export type DoctorData = {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  specialization_name: string,
}

export type DoctorAppointment = {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: string,
  patient: PatientData,
}

export type PatientAppointment = {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: string,
  doctor: DoctorData,
}
