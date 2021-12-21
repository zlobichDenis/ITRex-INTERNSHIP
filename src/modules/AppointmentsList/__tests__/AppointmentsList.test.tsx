import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { UserAppointmentsList } from "../index";
import { doctorAppointments, patientAppointments } from "__mock__";
import { FetchStatus, UserRoles } from "const";
import * as useFetchAppointments from "../hooks/useFetchAppointments";

describe("Appointments list", () => {
  it("should render appointments when role is DoctorAppointment and list is not empty", () => {
    jest
      .spyOn(useFetchAppointments, "useFetchAppointments")
      // @ts-ignore
      .mockImplementation(() => {
        return {
          roleName: UserRoles.DOCTOR,
          appointments: doctorAppointments,
          fetchStatus: FetchStatus.SUCCESS,
        };
      });
    render(<UserAppointmentsList />);
    expect(screen.getAllByRole("patient")).toHaveLength(
      doctorAppointments.length
    );
  });

  it("should render empty appointment list when role is ", () => {
    jest
      .spyOn(useFetchAppointments, "useFetchAppointments")
      .mockImplementation(() => {
        return {
          roleName: UserRoles.DOCTOR,
          appointments: [],
          fetchStatus: FetchStatus.SUCCESS,
        };
      });
    const { getByTestId } = render(<UserAppointmentsList />);
    expect(getByTestId("empty-appointments-list")).toBeInTheDocument();
  });

  it("should render appointments when role is patient and list is not empty", () => {
    jest
      .spyOn(useFetchAppointments, "useFetchAppointments")
      .mockImplementation(() => {
        return {
          roleName: UserRoles.PATIENT,
          appointments: patientAppointments,
          fetchStatus: FetchStatus.SUCCESS,
        };
      });
    render(<UserAppointmentsList />);
    expect(screen.getAllByRole("doctor")).toHaveLength(
      patientAppointments.length
    );
  });

  it("should render appointments whe role is patient and list is empty", () => {
    jest
      .spyOn(useFetchAppointments, "useFetchAppointments")
      .mockImplementation(() => {
        return {
          roleName: UserRoles.PATIENT,
          appointments: [],
          fetchStatus: FetchStatus.SUCCESS,
        };
      });
    const { getByTestId } = render(<UserAppointmentsList />);
    expect(getByTestId("empty-appointments-list")).toBeInTheDocument();
  });
});