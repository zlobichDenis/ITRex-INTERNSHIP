import { UserRoles } from "enums";
import { PatientAppointment, DoctorAppointment } from "../components";


export const createAppointmentsList = (appointments: any[], roleName: string | null) => {
  if (roleName === UserRoles.PATIENT) {
    return appointments.map((appointment, index) => (
      <DoctorAppointment
        key={`doctor-${appointment.id}-${index}`}
        appointment={appointment}
      />
    ))
  } else {
    return appointments.map((appointment, index) => (
      <PatientAppointment
        key={`patient-${appointment.id}-${index}`}
        appointment={appointment}
      />
    ))
  }
};
