import React from "react";

import { Patient, Doctor } from "../components/AppointmentsList/components";

export const createAppointmentsList = (appointments, itsPatientUser) => {
  if (itsPatientUser) {
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
