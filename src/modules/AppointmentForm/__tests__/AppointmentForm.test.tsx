import { fireEvent, render, screen, act } from "@testing-library/react";
import selectEvent from 'react-select-event';
import "@testing-library/jest-dom";

import { FetchStatus } from "const";
import { AppointmentForm } from "../components";
import * as useCreateAppointment from "../hooks/useCreateAppointment";
import * as useGetFormData from "../hooks/useFetchFormaData";
import { allSpecializations, doctorsSurgeon, availableHours } from "__mock__";


describe('Appointment form', () => {
  it('form should render when allSpecialization not false but calendar and time radio list not display', () => {
    const onSubmit = jest.fn();
    jest.spyOn(useGetFormData, 'useFetchFormData').mockImplementation(() => {
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
        createAppointment: () => onSubmit(),
        fetchStatus: FetchStatus.SUCCESS,
      }
    })

    const { getByRole } = render(<AppointmentForm />);

    expect(getByRole('no-calendar-message')).toBeInTheDocument();
    expect(getByRole('no-date-and-doctor')).toBeInTheDocument();
  })

  it('onSumbit button should be disabled when doctor, specialization, time, date not choised', () => {
    const onSubmit = jest.fn();
    jest.spyOn(useGetFormData, 'useFetchFormData').mockImplementation(() => {
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

  it('calendar should render when doctor and occupation are choised', async () => {
    const onSubmit = jest.fn();
    jest.spyOn(useGetFormData, 'useFetchFormData').mockImplementation(() => {
      return {
        allSpecializations: allSpecializations,
        doctors: doctorsSurgeon,
        fetchStatus: FetchStatus.SUCCESS,
        availableHours: null,
        date: null,
      }
    });
    jest.spyOn(useCreateAppointment, 'useCreateAppointment').mockImplementation(() => {
      return {
        createAppointment: () => onSubmit,
        fetchStatus: FetchStatus.SUCCESS,
      }
    });

    const { getByText, container } = render(<AppointmentForm />)

    await selectEvent.select(getByText('Select occupation'), ["surgeon"]);
    await selectEvent.select(getByText('Select doctor'), ['Gena Bukin'])

    expect(container.querySelector('.react-datepicker')).toBeInTheDocument()
  })

  it('time radio list should render when occupation, doctor and date are choised', async () => {
    const onSubmit = jest.fn();
    jest.spyOn(useGetFormData, 'useFetchFormData').mockImplementation(() => {
      return {
        allSpecializations: allSpecializations,
        doctors: doctorsSurgeon,
        fetchStatus: FetchStatus.SUCCESS,
        availableHours: availableHours,
        date: null,
      }
    });
    jest.spyOn(useCreateAppointment, 'useCreateAppointment').mockImplementation(() => {
      return {
        createAppointment: () => onSubmit,
        fetchStatus: FetchStatus.SUCCESS,
      }
    });

    const { getByText, getByRole } = render(<AppointmentForm />)

    await selectEvent.select(getByText('Select occupation'), ["surgeon"]);
    await selectEvent.select(getByText('Select doctor'), ['Gena Bukin'])
    await fireEvent.click(getByText('27'))

    expect(getByRole('hours-list')).toBeInTheDocument();
  })
})