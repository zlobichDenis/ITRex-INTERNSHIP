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

export type PatientData = Readonly<AppointmentOwner>;
export type DoctorData = Readonly<AppointmentOwner & { specialization_name: string }>;

export type DoctorAppointment = Readonly<Appointment & { readonly patient: PatientData }>;
export type PatientAppointment = Readonly<Appointment & { readonly doctor: DoctorData }>;
