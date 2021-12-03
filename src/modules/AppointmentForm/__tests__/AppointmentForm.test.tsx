import { fireEvent, render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import { FetchStatus } from "const";
import { AppointmentForm } from "../components/Form";
import * as useCreateAppointment from "../hooks/useCreateAppointment";
import * as useGetFormData from "../hooks/useGetFormaData";


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

  it('onSumbit button should be disabled when doctor, specialization, time, date not choised', () => {
    const onSubmit = jest.fn();
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
        createAppointment: () => onSubmit,
        fetchStatus: FetchStatus.SUCCESS,
      }
    })
    act(() => {
      render(<AppointmentForm/>);
    })
    act(() => {
      fireEvent.click(screen.getByRole('submit-appointment'));
    })

    expect(onSubmit).not.toHaveBeenCalled()
  })
})