type Appointment = {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: string,
}

type AppointmentOwner = {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
}

export type FetchDataList = {
  offset: number,
  limit: number,
  sortBy?: string,
  order?: string,
}

export type PostNewResolution = {
  resolution: string,
  appointmentID: string,
}

export type PatientData = Readonly<AppointmentOwner>;
export type DoctorData = Readonly<AppointmentOwner & { specialization_name: string }>;

export type DoctorAppointment = Readonly<Appointment & { patient: PatientData }>;
export type PatientAppointment = Readonly<Appointment & { doctor: DoctorData }>;


