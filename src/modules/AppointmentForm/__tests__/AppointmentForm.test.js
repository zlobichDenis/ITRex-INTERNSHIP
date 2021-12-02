import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { FetchStatus } from "const";
import { AppointmentForm } from "../components/Form";
import * as useCreateAppointment from "../redux/hooks/useCreateAppointment";
import * as useGetFormData from "../redux/hooks/useGetFormaData";


describe('Appointment form', () => {
  it('form should render when allSpecialization not false but calendar and time radio list not display', () => {
    jest.spyOn(useGetFormData, 'useGetFormData').mockImplementation(() => {
      return {
        allSpecializations: [],
        doctors: null,
        fetchStatus: FetchStatus.SUCCESS,
        availableHours: null,
        date: null,
      }
    })
    jest.spyOn(useCreateAppointment, 'useCreateAppointment').mockImplementation(() => {
      return {
        createAppointment: () => console.log('some'),
        fetchStatus: FetchStatus.SUCCESS,
      }
    })

    const { getByRole } = render(<AppointmentForm />);
    expect(getByRole('no-calendar-message')).toBeInTheDocument();
    expect(getByRole('no-date-and-doctor')).toBeInTheDocument();
  })

})