type Appointment = {
  readonly id: string,
  readonly reason: string,
  readonly note: string,
  readonly patient_id: string,
  readonly doctor_id: string,
  readonly visit_date: string,
  readonly status: string,
}

type AppointmentOwner = {
  readonly id: string,
  readonly first_name: string,
  readonly last_name: string,
  readonly photo: string,
  readonly specialization_name: string,
}

export type PatientData = Required<Omit<AppointmentOwner, "specialization_name">>;
export type DoctorData = AppointmentOwner;

export type DoctorAppointment = Appointment & { readonly patient: PatientData };
export type PatientAppointment = Appointment & { readonly doctor: DoctorData };
