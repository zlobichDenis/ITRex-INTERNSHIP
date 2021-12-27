import { UserRoles } from "enums";
import { Patient, Doctor } from "../components";


export const createAppointmentsList = (appointments: Array<any>, roleName: string | null) => {
  if (roleName === UserRoles.PATIENT) {
    return appointments.map((appointment, index) => (
      <Doctor
        key={`doctor-${appointment.id}-${index}`}
        appointment={appointment}
      />
    ))
  } else {
    return appointments.map((appointment, index) => (
      <Patient
        key={`patient-${appointment.id}-${index}`}
        appointment={appointment}
      />
    ))
  }
};
