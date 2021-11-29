import React from "react";

import { UserRoles } from "const";
import { Patient, Doctor } from "../components/AppointmentsList/components";

export const createAppointmentsList = (appointments, roleName) => {
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
