import React from "react";
import { getAllByRole, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';

import { UserAppointmentsList } from "..";
import { doctorAppointments, patientAppointments } from "services";
import { FetchStatus, UserRoles } from "const";
import * as useFetchAppointments from "../redux/hooks/useFetchAppointments";


describe('Appointments list', () => {
    it('should render appointments when role is Doctor and list is not empty', () => {
        jest.spyOn(useFetchAppointments, "useFetchAppointments").mockImplementation(() => {
            return { roleName: UserRoles.DOCTOR, appointments: doctorAppointments, fetchStatus: FetchStatus.SUCCESS}
        })
        render(<UserAppointmentsList />)
        expect(screen.getAllByRole('patient')).toHaveLength(doctorAppointments.length);
    })

    it('shoul render empty appointment list when role is ', () => {
        jest.spyOn(useFetchAppointments, "useFetchAppointments").mockImplementation(() => {
            return { roleName: UserRoles.DOCTOR, appointments: [], fetchStatus: FetchStatus.SUCCESS}
        })
        const { getByTestId } = render(<UserAppointmentsList />)
        expect(getByTestId("empty-appointments-list")).toBeInTheDocument();
    })

    it('should render appointments when role is patient and list is not empty', () => {
        jest.spyOn(useFetchAppointments, "useFetchAppointments").mockImplementation(() => {
            return { roleName: UserRoles.PATIENT, appointments: patientAppointments, fetchStatus: FetchStatus.SUCCESS}
        })
        render(<UserAppointmentsList />)
        expect(screen.getAllByRole('doctor')).toHaveLength(patientAppointments.length);
    })

    it('should render appointments whe role is patient and list is empty', () => {
        jest.spyOn(useFetchAppointments, "useFetchAppointments").mockImplementation(() => {
            return { roleName: UserRoles.PATIENT, appointments: [], fetchStatus: FetchStatus.SUCCESS}
        })
        const { getByTestId } = render(<UserAppointmentsList />)
        expect(getByTestId("empty-appointments-list")).toBeInTheDocument();
    })
})