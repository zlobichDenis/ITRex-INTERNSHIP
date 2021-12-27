import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { UserAppointmentsList } from "..";
import { doctorAppointments, patientAppointments } from "__mock__";
import { FetchStatus, UserRoles } from "enums";
import * as useFetchAppointments from "../hooks/useFetchAppointments";


jest.mock("../hooks/useDeleteAppointment", () => {
  return {
    useDeleteAppointment: () => ({
      dispatchDeleteAppointment: () => undefined
    })
  }
})
jest.mock("../hooks/useCreateNewResolution", () => {
  return {
    useCreateNewResolution: () => ({
      dispatchNewResolution: () => undefined,
    })
  }
})
jest.mock("../hooks/useSortDoctorAppointments", () => {
  return {
    useSortDoctorAppointments: () => ({
      fetchAppointmentsByLastName: () => undefined,
      fetchAppointmentsByDate: () => undefined,
    })
  }
})


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

  it("should render empty appointment list when role is Doctor", () => {
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
});